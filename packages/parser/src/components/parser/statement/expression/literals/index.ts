import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import BhaiLangModule from "../../../../../module/bhaiLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";


export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return BhaiLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return BhaiLangModule.getBooleanLiteral();

      default:
        return BhaiLangModule.getStringLiteral();
    }
  }
}
