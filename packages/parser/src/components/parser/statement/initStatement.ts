import Statement from '.';

import { TokenTypes } from '../../../constants/bhaiLangSpec';
import StatementList from '../statementList';
import TokenExecutor from '../tokenExecutor';


export default class InitStatement extends Statement {
    _statementList: StatementList;

    constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
        super(tokenExecutor);
        this._statementList = statementList;
    }

    getStatement(): any {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE);       

        const body = this._tokenExecutor.getLookahead()?.type !== TokenTypes.BYE_BHAI_TYPE ? this._statementList.getStatementList(TokenTypes.BYE_BHAI_TYPE) : [];

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BYE_BHAI_TYPE);

        return {
            type: 'InitStatement',
            body,
        };
    }
}
