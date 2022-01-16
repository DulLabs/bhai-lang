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

    static getStatementImpl(lookahead: Token):any {
        switch (lookahead.type) {
          case TokenTypes.HI_BHAI_TYPE:
            return BhaiLangModule.getInitStatement()

          case TokenTypes.BOL_BHAI_TYPE:
            return BhaiLangModule.getPrintStatement()
            
          case TokenTypes.SEMI_COLON_TYPE:
            return BhaiLangModule.getEmptyStatement()

          case TokenTypes.OPEN_CURLY_BRACE_TYPE:
            return BhaiLangModule.getBlockStatement()

          default:
            return BhaiLangModule.getExpressionStatement()
        }
      }
}
