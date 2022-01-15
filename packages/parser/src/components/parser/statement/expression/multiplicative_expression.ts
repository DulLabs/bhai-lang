import Expression from '.';

import { TokenTypes } from '../../../../constants/bhaiLangSpec';

import { ExpressionType } from '../../../../constants/constants';
import TokenExecutor from '../../tokenExecutor';


export default class MultiplicativeExpression extends Expression {

  _primaryexpression = Expression.getExpressionImpl(ExpressionType.PrimaryExpression);


  constructor(tokenExecutor: TokenExecutor ) {
    super(tokenExecutor);
  }

  getExpression() {
    let left: any = this._primaryexpression.getExpression();

    while (this._tokenExecutor.getLookahead()?.type === TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE) {
      const operator = this._tokenExecutor.eatTokenAndForwardLookahead ('MULTIPLICATIVE_OPERATOR');
      const right = this._primaryexpression.getExpression();
      left = {
        type: 'BINARY_EXPRESSION',
        operator: operator.value,
        left,
        right
      }
    }

    return left
  }
}
