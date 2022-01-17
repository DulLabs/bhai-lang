import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";

export default class BooleanLiteral extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BOOLEAN_TYPE
    );
    return {
      type: "BooleanLiteral",
      value: token.value,
    };
  }
}
