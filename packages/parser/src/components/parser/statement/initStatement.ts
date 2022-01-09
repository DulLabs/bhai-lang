import Statement from ".";
import { TokenTypes } from "../../../constants/bhaiLangSpec";

export default class InitStatement extends Statement {
  getStatement(): any {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE);

    const body =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.BYE_BHAI_TYPE
        ? this._statementList.getStatementList(TokenTypes.BYE_BHAI_TYPE)
        : [];

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BYE_BHAI_TYPE);

    return {
      type: "InitStatement",
      body,
    };
  }
}
