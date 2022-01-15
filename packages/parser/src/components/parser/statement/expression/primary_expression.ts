import Expression from '.';

import { TokenTypes } from '../../../../constants/bhaiLangSpec';

import { ExpressionType } from './constants';
import Literal from './literals';


export default class PrimaryExpression extends Expression {
  getExpression() {
    const token = this._tokenExecutor.getLookahead();

    switch (token?.type) {
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(ExpressionType.ParanthesizedExpression).getExpression();
      default:
        return Literal.getLiteralImpl(token?.type);
    }
  }
}
