import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";

export default class StringLiteral extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.STRING_TYPE
    );
    return {
      type: NodeType.StringLiteral,
      value: token.value.slice(1, -1),
    };
  }
}
