import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import BhaiLangModule from "../../../../../module/bhaiLangModule";
import TokenExecutor from "../../../tokenExecutor";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): any;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return BhaiLangModule.getNumericLiteral();
      default:
        return BhaiLangModule.getStringLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return BhaiLangModule.getBooleanLiteral();
    }
  }
}
