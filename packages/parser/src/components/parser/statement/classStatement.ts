import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";

export default class ClassStatement extends Statement {

  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.SAMAJH_LE_BHAI
    );

    const declaration = this._getClassDeclaration();

    // this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: NodeType.ClassStatement,
      declaration,
    };
  }


  private _getClassDeclaration(): ASTNode {
    const id = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
    let lookahead=this._tokenExecutor.getLookahead()
    if (lookahead == null) {
      throw new SyntaxError(`Unexpected end of "samajh le bhai" statement`);
    }
    
    let superClasses:ASTNode[]=[]
    if(lookahead.type===TokenTypes.JO_KI_EK_BHAI){
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.JO_KI_EK_BHAI);
      lookahead=this._tokenExecutor.getLookahead()
      if (lookahead == null) {
        throw new SyntaxError(`Unexpected end of "jo ki ek" statement`);
      }
      if(lookahead.type!==TokenTypes.IDENTIFIER_TYPE){
        throw new SyntaxError(`Unexpected token after "jo ki ek", got "${lookahead.value}" : expected "${TokenTypes.IDENTIFIER_TYPE}"`);
      }
      
      do {
        superClasses.push(Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression());
      } while (
        this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
      );
    }
    lookahead=this._tokenExecutor.getLookahead()
    if (lookahead == null) {
        throw new SyntaxError(`Unexpected end of "jo ki ek" statement`);
    }
    // removing optional hai bhai tokens
    if(lookahead.type===TokenTypes.HAI_BHAI){
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HAI_BHAI)
      lookahead=this._tokenExecutor.getLookahead()
      if (lookahead == null) {
        throw new SyntaxError(`Unexpected end of "hai bhai" statement`);
      }
    }
    
    if(lookahead.type!==TokenTypes.OPEN_CURLY_BRACE_TYPE){
      throw new SyntaxError(`Unexpected token after smajhana signature ${id.name}, got "${lookahead.value}" : expected "{"`);
    }
    const body=Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.ClassDeclaration,
      id,
      body,
      inherits:superClasses
    };
  }
}
