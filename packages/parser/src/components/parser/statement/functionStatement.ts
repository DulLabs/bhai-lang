import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";
import NullLiteral from "./expression/literals/nullLiteral";

export default class FunctionStatement extends Statement {
  _nullLiteral: NullLiteral;

  constructor(tokenExecutor: TokenExecutor, nullLiteral: NullLiteral) {
    super(tokenExecutor);
    this._nullLiteral = nullLiteral;
  }

  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.FUNDA_TYPE
    );

    const declaration = this._getFunctionDeclaration();

    // this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: NodeType.FunctionStatement,
      declaration,
    };
  }


  private _getFunctionDeclaration(): ASTNode {
    const id = Expression.getExpressionImpl(
      NodeType.CallableExpression
    ).getExpression();
    let lookahead=this._tokenExecutor.getLookahead()
    if (lookahead == null) {
      throw new SyntaxError(`Unexpected end of "jab tak bhai" statement`);
    }
    if(lookahead.type!==TokenTypes.OPEN_CURLY_BRACE_TYPE){
      throw new SyntaxError(`Unexpected token after funda signature ${id.name}, got "${lookahead.value}" : expected "{"`);
    }
    const body=Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.FunctionDeclaration,
      id,
      body
    };
  }
}
