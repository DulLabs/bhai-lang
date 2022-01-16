import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { ExpressionType, StatementTypes } from "../../../constants/constants";

import Expression from "./expression";

export default class ExpressionStatement extends Statement {
  getStatement() {
    const expression = Expression.getExpressionImpl(
      ExpressionType.AssignmentExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: StatementTypes.ExpressionStatement,
      expression,
    };
  }
}
