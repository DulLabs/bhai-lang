import { eatToken } from '../../utils';
import {
  Token,
  Tokenizer,
} from '../tokenizer/types';
import Statement from './statement';

export default class StatementList{
  _tokenizer: Tokenizer;
  _lookahead: Token;
  _statementList = [];
  _statement: Statement;

  constructor(tokenizer: Tokenizer, lookahead: Token, statement: Statement){
    this._tokenizer = tokenizer;
    this._lookahead = lookahead;
    this._statement = statement;
  }

    getStatementList(){
      while (this._lookahead !== null && this._lookahead.type !== 'hi bhai'){
            eatToken(this._lookahead.type, this._lookahead, this._tokenizer.getNextToken);
        }

      const statementlist = [this._statement.getStatementImpl(this._lookahead)];

      while (this._lookahead !== null ) {
        statementlist.push(this._statement.getStatementImpl(this._lookahead));
      }
      return statementlist;
    }
}
