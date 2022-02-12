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

      default:
        return BhaiLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    expressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    let left = Expression.getExpressionImpl(expressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(expressionType).getExpression();
      
      left = {
        type: NodeType.BinaryExpression,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
