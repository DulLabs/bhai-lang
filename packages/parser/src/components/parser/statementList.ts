import { TokenTypes } from '../../constants/bhaiLangSpec';

import Statement from './statement';
import TokenExecutor from './tokenExecutor';


export default class StatementList {
  private _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  getInitialStatementList() {

    for (let lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && lookahead.type !== TokenTypes.HI_BHAI_TYPE; lookahead = this._tokenExecutor.getLookahead()) {
      this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
    }

    return this.getStatementList(null);
  }

  getStatementList(stopLookaheadType: string | null = null) {

    const statementlist = [];

    for (let lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && this._tokenExecutor.getLookahead()?.type !== stopLookaheadType; lookahead = this._tokenExecutor.getLookahead()) {
      // Statement.getStatementImpl(lookahead) -> this will get the Statement
      // implementation according to look ahead
      // and we will get the statement by calling getStatement() function

      statementlist.push(Statement.getStatementImpl(lookahead).getStatement());
    }

    return statementlist;
  }
}
