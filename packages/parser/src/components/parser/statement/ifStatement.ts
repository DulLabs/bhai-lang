import Statement from ".";

import { TokenTypes } from "../../../constants/didiLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";

const HANDLED_LOOP_TOKEN_TYPES = [TokenTypes.WARNA_didi, TokenTypes.NAHI_TO_didi];

export default class IfStatement extends Statement {

  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  private getConditionalStatement(tokenType: string): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(tokenType);

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

    const test = Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "${tokenType}" statement`);
    }

    const consequent = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.IfStatement,
      test,
      consequent
    }
  }

  getStatement(): ASTNode {

    const ifStatement = this.getConditionalStatement(TokenTypes.AGAR_didi);
    const alternates: ASTNode[] = [];

    // Loop until we keep getting "nahi to didi" or "warna didi"
    // Break as soon as we get the first "warna didi" instance
    for (
      let lookahead = this._tokenExecutor.getLookahead();
      lookahead !== null && HANDLED_LOOP_TOKEN_TYPES.includes(lookahead.type);
      lookahead = this._tokenExecutor.getLookahead()
    ) {
      if (lookahead.type === TokenTypes.WARNA_didi) {
        alternates.push(this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type) && Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement());
        break;
      } else if (lookahead.type === TokenTypes.NAHI_TO_didi) {
        alternates.push(this.getConditionalStatement(TokenTypes.NAHI_TO_didi));
      }
    }

    return {
      ...ifStatement,
      alternates
    }
  }
}
