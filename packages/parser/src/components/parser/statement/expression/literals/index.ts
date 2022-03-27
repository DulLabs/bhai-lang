import { TokenTypes } from "../../../../../constants/didiLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import didiLangModule from "../../../../../module/didiLangModule";
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
        return didiLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return didiLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return didiLangModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return didiLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
