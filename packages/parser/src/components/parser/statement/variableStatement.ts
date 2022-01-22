import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";
import NullLiteral from "./expression/literals/nullLiteral";

export default class VariableStatement extends Statement {
  _nullLiteral: NullLiteral;

  constructor(tokenExecutor: TokenExecutor, nullLiteral: NullLiteral) {
    super(tokenExecutor);
    this._nullLiteral = nullLiteral;
  }

  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BHAI_YE_HAI_TYPE
    );

    const declarations = this._getVariableDeclarationList();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: NodeType.VariableStatement,
      declarations,
    };
  }

  private _getVariableDeclarationList() {
    const declarations: ASTNode[] = [];

    do {
      declarations.push(this._getVariableDeclaration());
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
    );

    return declarations;
  }

  private _getVariableDeclaration(): ASTNode {
    const id = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();

    // Optional VariableInitializer
    const init =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.SEMI_COLON_TYPE &&
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.COMMA_TYPE
        ? this._getVariableInitializer()
        : this._nullLiteral.getLiteral();

    return {
      type: NodeType.VariableDeclaration,
      id,
      init,
    };
  }

  private _getVariableInitializer() {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.SIMPLE_ASSIGN_TYPE
    );

    return Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();
  }
}
