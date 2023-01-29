import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class ArrayLengthExpression extends Expression {
  getExpression(): ASTNode {
    // name of identifier (could be array access itself)
    const identifierExpression = Expression.getExpressionImpl(NodeType.ArrayAccessExpression).getExpression();

    // this is an actual array length expression, otherwise we default to an array access expression
    if (this._tokenExecutor.getLookahead()?.type === TokenTypes.KA_LAMBAI) {
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.KA_LAMBAI);

      return {
        type: NodeType.ArrayLengthExpression,
        expressions: [identifierExpression]
      };
    }

    return identifierExpression;
  }
}
