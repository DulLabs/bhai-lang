import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { ExpressionType } from "../../../../constants/constants";

export default class MultiplicativeExpression extends Expression {
  getExpression() {
    return this.getBinaryExpression(
      ExpressionType.PrimaryExpression,
      TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE
    );
  }
}
