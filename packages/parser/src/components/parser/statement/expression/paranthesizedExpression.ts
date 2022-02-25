import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class ParanthesizedExpression extends Expression {
  getExpression(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.OPEN_PARENTHESIS_TYPE
    );

    const expression = Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.CLOSED_PARENTHESIS_TYPE
    );

    return expression;
  }
}
