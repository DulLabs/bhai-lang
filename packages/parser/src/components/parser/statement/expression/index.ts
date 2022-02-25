import { NodeType } from "../../../../constants/constants";
import BhaiLangModule from "../../../../module/bhaiLangModule";
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
        return BhaiLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return BhaiLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return BhaiLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return BhaiLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return BhaiLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return BhaiLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return BhaiLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return BhaiLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return BhaiLangModule.getRelationalExpression();

      default:
        return BhaiLangModule.getIndentifierExpression();
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
