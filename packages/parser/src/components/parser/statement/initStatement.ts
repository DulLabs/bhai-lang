import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import StatementList from "../statementList";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

export default class InitStatement extends Statement {
  _statementList: StatementList;

  constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
    super(tokenExecutor);
    this._statementList = statementList;
  }

  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE);

    this._tokenExecutor.eatOptionalSemiColonToken();

    const body =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.CHAL_BHAI_TYPE
        ? this._statementList.getStatementList(TokenTypes.CHAL_BHAI_TYPE)
        : [];

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CHAL_BHAI_TYPE);

    this._tokenExecutor.eatOptionalSemiColonToken();

    return {
      type: NodeType.InitStatement,
      body,
    };
  }
}
