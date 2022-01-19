import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { ExpressionType } from "../../../../constants/constants";

import Literal from "./literals";

export default class PrimaryExpression extends Expression {
  getExpression() {
    const token = this._tokenExecutor.getLookahead();

    switch (token?.type) {
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(
          ExpressionType.ParanthesizedExpression
        ).getExpression();
      case TokenTypes.STRING_TYPE:
      case TokenTypes.NUMBER_TYPE:
      case TokenTypes.BOOLEAN_TYPE:
        return Literal.getLiteralImpl(token?.type).getLiteral();
      default:
        return this._getLeftHandSideExpression();
    }
  }

  private _getLeftHandSideExpression() {
    return Expression.getExpressionImpl(
      ExpressionType.IdentifierExpression
    ).getExpression();
  }
}
