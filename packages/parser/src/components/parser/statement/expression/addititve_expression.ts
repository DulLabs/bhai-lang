import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { ExpressionType } from "../../../../constants/constants";

export default class AdditiveExpression extends Expression {
  getExpression() {
    return this.getBinaryExpression(
      ExpressionType.MultiplicativeExpression,
      TokenTypes.ADDITIVE_OPERATOR_TYPE
    );
  }
}
