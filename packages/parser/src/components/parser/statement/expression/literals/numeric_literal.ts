import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";

export default class NumericLiteral extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.NUMBER_TYPE
    );
    return {
      type: NodeType.NumericLiteral,
      value: Number(token.value),
    };
  }
}
