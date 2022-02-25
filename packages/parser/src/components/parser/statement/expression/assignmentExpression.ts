import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class AssignmentExpression extends Expression {
  private _logicalORExpression = Expression.getExpressionImpl(
    NodeType.LogicalORExpression
  );

  getExpression(): ASTNode {
    const left = this._logicalORExpression.getExpression();

    // case if there is no AssignmentOperator but only normal additive expression => x + y
    if (!this._isAssignmentOperator(this._tokenExecutor.getLookahead()?.type)) {
      return left;
    }

    return {
      type: NodeType.AssignmentExpression,
      operator: this._getAssignmentOperator().value,
      left: this._checkValidAssignmentTarget(left),
      right: this.getExpression(), // right recurrsion
    };
  }

  /**
   * Whether it is a assignmnet operator
   * @returns
   */
  private _isAssignmentOperator(tokenType: string | undefined) {
    return (
      tokenType &&
      (tokenType === TokenTypes.SIMPLE_ASSIGN_TYPE ||
        tokenType === TokenTypes.COMPLEX_ASSIGN_TYPE)
    );
  }

  private _getAssignmentOperator() {
    const lookahead = this._tokenExecutor.getLookahead();

    if (!lookahead || lookahead.type === TokenTypes.SIMPLE_ASSIGN_TYPE)
      return this._tokenExecutor.eatTokenAndForwardLookahead(
        TokenTypes.SIMPLE_ASSIGN_TYPE
      );

    return this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.COMPLEX_ASSIGN_TYPE
    );
  }

  /**
   * Extra check whether it's valid assignment target
   * @param {*} node
   */
  private _checkValidAssignmentTarget(node: any) {
    if (node.type === NodeType.IdentifierExpression) return node;

    throw new SyntaxError("Invalid left hand side in assignment expression");
  }
}
