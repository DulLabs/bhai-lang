import { TokenTypes } from "../../constants/bhaiLangSpec";
import Statement from "./statement";
import TokenExecutor from "./tokenExecutor";

export default class StatementList {

    private _tokenExecutor: TokenExecutor;

    constructor(tokenExecutor: TokenExecutor){
        this._tokenExecutor = tokenExecutor;
    }

    getInitialStatementList() {
        const lookahead = this._tokenExecutor.getLookahead();

        while (lookahead !== null && lookahead.type !== TokenTypes.HI_BHAI_TYPE) {
            this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
        }

        return this.getStatementList(null);
    }

    getStatementList(stopLookaheadType: string | null = null) {
        const lookahead = this._tokenExecutor.getLookahead();

        const statementlist = [];

        while (lookahead !== null && lookahead.type !== stopLookaheadType) {
            
            // Statement.getStatementImpl(lookahead) -> this will get the Statement 
            // implementation according to look ahead
            // and we will get the statement by calling getStatement() function

            statementlist.push(Statement.getStatementImpl(lookahead)?.getStatement());
        }

        return statementlist;
    }
}