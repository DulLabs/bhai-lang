import { Token, Tokenizer } from "../tokenizer/types";
import Statement from "./statement";

export default class StatementList {

    _tokenizer: Tokenizer;

    constructor(tokenizer: Tokenizer){
        this._tokenizer = tokenizer;
    }

    getStatementList(lookahead: Token) {
        while (lookahead !== null && lookahead.type !== 'hi bhai'){
            //TODO: Eat token
            // eatToken(this._lookahead.type, this._lookahead, this._tokenizer.getNextToken);
        }

        const statementlist = [];

        while (lookahead !== null ) {
            
            // Statement.getStatementImpl(lookahead) -> this will get the Statement 
            // implementation according to look ahead
            // and we will get the statement by calling getStatement() function

            statementlist.push(Statement.getStatementImpl(lookahead)?.getStatement());
        }

        return statementlist;
    }
}