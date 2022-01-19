import Statement from ".";
import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { ExpressionType, StatementTypes } from "../../../constants/constants";
import Expression from "./expression";

export default class VariableStatement extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BHAI_YE_HAI_TYPE
    );

    const declarations = this._getVariableDeclarationList();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: StatementTypes.VariableStatement,
      declarations,
    };
  }

  private _getVariableDeclarationList() {
    const declarations: any[] = [];

    do {
      declarations.push(this._getVariableDeclaration());
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
    );

    return declarations;
  }

  private _getVariableDeclaration() {
    const id = Expression.getExpressionImpl(
      ExpressionType.IdentifierExpression
    ).getExpression();

    // Optional VariableInitializer
    const init =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.SEMI_COLON_TYPE &&
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.COMMA_TYPE
        ? this._getVariableInitializer()
        : null;

    return {
      type: "VariableDeclaration",
      id,
      init,
    };
  }

  private _getVariableInitializer() {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.SIMPLE_ASSIGN_TYPE
    );

    return Expression.getExpressionImpl(
      ExpressionType.AssignmentExpression
    ).getExpression();
  }
}
