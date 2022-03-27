import { NodeType } from "../../../../constants/constants";
import didiLangModule from "../../../../module/didiLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return didiLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return didiLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return didiLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return didiLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return didiLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return didiLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return didiLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return didiLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return didiLangModule.getRelationalExpression();

      default:
        return didiLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
