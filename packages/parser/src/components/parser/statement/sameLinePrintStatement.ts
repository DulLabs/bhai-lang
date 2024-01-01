import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";


export default class SameLinePrintStatement extends Statement {
  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BOL_BHAI_ABHI_TYPE);

    const expressions = this._getExpressionList();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: NodeType.SameLinePrintStatement,
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
