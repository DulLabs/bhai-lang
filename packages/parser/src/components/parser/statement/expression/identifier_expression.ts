import Expression from ".";
import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { ExpressionType } from "../../../../constants/constants";

export default class IdentifierExpression extends Expression {
  getExpression() {
    const name = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.IDENTIFIER_TYPE
    ).value;

    return {
      type: ExpressionType.IdentifierExpression,
      name,
    };
  }
}
