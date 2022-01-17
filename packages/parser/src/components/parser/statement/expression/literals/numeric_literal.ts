import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";

export default class NumericLiteral extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.NUMBER_TYPE
    );
    return {
      type: "NumericLiteral",
      value: Number(token.value),
    };
  }
}
