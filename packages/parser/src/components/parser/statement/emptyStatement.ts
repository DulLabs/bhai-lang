import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { StatementTypes } from "../../../constants/constants";

export default class EmptyStatement extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: StatementTypes.EmptyStatement,
    };
  }
}
