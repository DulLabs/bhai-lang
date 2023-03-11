import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class ArrayAccessExpression extends Expression {
  getExpression(): ASTNode {
    const expressions = [];

    // name of identifier (could be array name)
    const identifierExpression = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();

    // this is an actual array access expression, otherwise we default to an identifier expression
    if (this._tokenExecutor.getLookahead()?.type === TokenTypes.OPEN_BRACKET_TYPE) {
      expressions.push(identifierExpression);

      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_BRACKET_TYPE);

      // index (additive expression)
      expressions.push(Expression.getExpressionImpl(NodeType.AdditiveExpression).getExpression());

      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_BRACKET_TYPE);

      return {
        type: NodeType.ArrayAccessExpression,
        expressions,
      };
    }

    return identifierExpression;
  }
}

