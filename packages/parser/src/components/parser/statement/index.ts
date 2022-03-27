import { TokenTypes } from "../../../constants/didiLangSpec";
import didiLangModule from "../../../module/didiLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.BOL_didi_TYPE:
        return didiLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return didiLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return didiLangModule.getBlockStatement();

      case TokenTypes.didi_YE_HAI_TYPE:
        return didiLangModule.getVariableStatement();

      case TokenTypes.AGAR_didi:
        return didiLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_didi:
        return didiLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_didi:
        return didiLangModule.getBreakStatement();
      
      case TokenTypes.AGLA_DEKH_didi:
        return didiLangModule.getContinueStatement();

      default:
        return didiLangModule.getExpressionStatement();
    }
  }
}
