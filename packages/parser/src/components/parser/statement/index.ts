import { TokenTypes } from "../../../constants/bhaiLangSpec";
import BhaiLangModule from "../../../module/bhaiLangModule";
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
      case TokenTypes.BOL_BHAI_TYPE:
        return BhaiLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return BhaiLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return BhaiLangModule.getBlockStatement();

      case TokenTypes.BHAI_YE_HAI_TYPE:
        return BhaiLangModule.getVariableStatement();

      case TokenTypes.AGAR_BHAI_TYPE:
        return BhaiLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_BHAI_TYPE:
        return BhaiLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_BHAI_TYPE:
        return BhaiLangModule.getBreakStatement();

      case TokenTypes.AGLA_DEKH_BHAI_TYPE:
        return BhaiLangModule.getContinueStatement();

      default:
        return BhaiLangModule.getExpressionStatement();
    }
  }
}
