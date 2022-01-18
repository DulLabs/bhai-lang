import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { ExpressionType, StatementTypes } from "../../../constants/constants";

import Expression from "./expression";

export default class PrintStatement extends Statement {
  getStatement(): any {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BOL_BHAI_TYPE);

    const expressions = this._getExpressionList();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: StatementTypes.PrintStatement,
      expressions,
    };
  }

  private _getExpressionList() {
    const expressions: any[] = [];

    do {
      expressions.push(this._getExpression());
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMA_TYPE)
    );

    return expressions;
  }

  private _getExpression() {
    return Expression.getExpressionImpl(
      ExpressionType.AdditiveExpression
    ).getExpression();
  }
}
