import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class ArrayExpression extends Expression {
  getExpression(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.OPEN_BRACKET_TYPE
    );

    const expressions = [];
    while (this._tokenExecutor.getLookahead()?.type != TokenTypes.CLOSED_BRACKET_TYPE) {
      expressions.push(Expression.getExpressionImpl(NodeType.LogicalORExpression).getExpression());
      if (this._tokenExecutor.getLookahead()?.type == TokenTypes.COMMA_TYPE) {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE);
      }
    }

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_BRACKET_TYPE);

    return {
      type: NodeType.ArrayExpression,
      expressions,
    };
  }
}

