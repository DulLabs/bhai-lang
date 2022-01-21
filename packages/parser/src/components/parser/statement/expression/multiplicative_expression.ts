import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";

export default class MultiplicativeExpression extends Expression {
  getExpression() {
    return this.getBinaryExpression(
      NodeType.PrimaryExpression,
      TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE
    );
  }
}
