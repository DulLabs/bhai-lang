import { TokenTypes } from "../../../constants/bhaiLangSpec";
import UnsupportedTypeException from "../../../exceptions/unsupportedTypeException";
import BhaiLangModule from "../../../module/bhaiLangModule";
import { Token } from "../../tokenizer/types";
import StatementList from "../statementList";
import TokenExecutor from "../tokenExecutor";

export default abstract class Statement {

  protected _tokenExecutor: TokenExecutor;
  protected _statementList: StatementList;

    constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
      this._tokenExecutor = tokenExecutor;
      this._statementList = statementList;
    }
    
    abstract getStatement(): any;

    static getStatementImpl(lookahead: Token) {
        switch (lookahead.type) {
          case TokenTypes.HI_BHAI_TYPE:
            return BhaiLangModule.getInitStatement()
          default:
            throw new UnsupportedTypeException(`lookhead type not supported: "${lookahead}"`);
        }
      }
}