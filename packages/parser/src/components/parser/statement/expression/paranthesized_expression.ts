import Expression from '.';

import { TokenTypes } from '../../../../constants/bhaiLangSpec';
import { ExpressionType } from '../../../../constants/constants';


export default class ParanthesizedExpression extends Expression {
  getExpression() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

    const expression = Expression.getExpressionImpl(ExpressionType.AdditiveExpression).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

    return expression
  }
}
