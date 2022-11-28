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

    return {
      type: NodeType.FunctionStatement,
      declaration,
    };
  }


  private _getFunctionDeclaration(): ASTNode {
    
    const functionSigneture = this._getFunctionSignature();

    let lookahead=this._tokenExecutor.getLookahead()
    
    if (lookahead == null) {
      throw new SyntaxError(`Unexpected end of "apna funda" statement`);
    }
    
    if(lookahead.type!==TokenTypes.OPEN_CURLY_BRACE_TYPE){
      throw new SyntaxError(`Unexpected token after funda signature ${functionSigneture.name}, got "${lookahead.value}" : expected "{"`);
    }
    
    const body=Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.FunctionDeclaration,
      signature:functionSigneture,
      body
    };
  }

  private _getFunctionSignature(): ASTNode {
    const functionName = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CALLABLE_TYPE).value;
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

    let args:ASTNode[]=[]
    if(this._tokenExecutor.getLookahead()?.type!=TokenTypes.CLOSED_PARENTHESIS_TYPE){
      args=this._getFunctionArguments();
    }
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    return {
      type: NodeType.FunctionSignature,
      name:functionName,
      args
    };
  }

  private _getFunctionArguments(): ASTNode[] {
    const declarations: ASTNode[] = [];
    do {
      declarations.push(this._getArgumentDeclaration());
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
    );
    return declarations;
  }

  private _getArgumentDeclaration(): ASTNode {
    const id = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();

    // Optional VariableInitializer
    const init =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE &&
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.COMMA_TYPE
        ? this._getArgumentInitializer()
        : this._nullLiteral.getLiteral();

    return {
      type: NodeType.VariableDeclaration,
      id,
      init,
    };
  }
  private _getArgumentInitializer() {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.SIMPLE_ASSIGN_TYPE
    );

    return Expression.getExpressionImpl(
      NodeType.PrimaryExpression
    ).getExpression();
  }

}
