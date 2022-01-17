import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { ExpressionType, StatementTypes } from "../../../constants/constants";

import Expression from "./expression";

export default class PrintStatement extends Statement {
  getStatement(): any {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BOL_BHAI_TYPE);

    const expression = Expression.getExpressionImpl(
      ExpressionType.AdditiveExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: StatementTypes.PrintStatement,
      expression,
    };
  }
}
