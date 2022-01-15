import { TokenTypes } from '../../../constants/bhaiLangSpec';
import BhaiLangModule from '../../../module/bhaiLangModule';
import { Token } from '../../tokenizer/types';
import TokenExecutor from '../tokenExecutor';


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

    constructor(tokenExecutor: TokenExecutor) {
      this._tokenExecutor = tokenExecutor;
    }
    
    abstract getStatement(): any;

    static getStatementImpl(lookahead: Token) {
        switch (lookahead.type) {
          case TokenTypes.HI_BHAI_TYPE:
            return BhaiLangModule.getInitStatement()
          
          default:
            return BhaiLangModule.getExpressionStatement()
        }
      }
}
