import Statement from ".";

import { TokenTypes } from "../../../constants/didiLangSpec";
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
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_didi_TYPE);

    this._tokenExecutor.eatOptionalSemiColonToken();

    const body =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.BYE_didi_TYPE
        ? this._statementList.getStatementList(TokenTypes.BYE_didi_TYPE)
        : [];

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BYE_didi_TYPE);

    this._tokenExecutor.eatOptionalSemiColonToken();

    return {
      type: NodeType.InitStatement,
      body,
    };
  }
}
