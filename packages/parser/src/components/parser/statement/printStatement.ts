import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";


export default class PrintStatement extends Statement {
  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BOL_BHAI_TYPE);

    const expressions = this._getExpressionList();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: NodeType.PrintStatement,
      expressions,
    };
  }

  private _getExpressionList() {
    const expressions: any[] = [];

    do {
      expressions.push(this._getExpression());
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
    );

    return expressions;
  }

  private _getExpression() {
    return Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();
  }
}
