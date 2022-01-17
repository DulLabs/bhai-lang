import { ExpressionType } from "../../../../constants/constants";
import BhaiLangModule from "../../../../module/bhaiLangModule";
import TokenExecutor from "../../tokenExecutor";

export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): any;

  static getExpressionImpl(
    expressionType: keyof typeof ExpressionType
  ): Expression {
    switch (expressionType) {
      case ExpressionType.AdditiveExpression:
        return BhaiLangModule.getAdditiveExpression();

      case ExpressionType.MultiplicativeExpression:
        return BhaiLangModule.getMultiplicativeExpression();

      case ExpressionType.PrimaryExpression:
        return BhaiLangModule.getPrimaryExpression();

      case ExpressionType.ParanthesizedExpression:
        return BhaiLangModule.getParanthesizedExpression();

      case ExpressionType.AssignmentExpression:
        return BhaiLangModule.getAssignmentExpression();

      default:
        return BhaiLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    expressionType: keyof typeof ExpressionType,
    operatorToken: string
  ) {
    let left: any =
      Expression.getExpressionImpl(expressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(expressionType).getExpression();
      left = {
        type: ExpressionType.BinaryExpression,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }
}
