import Statement from '.';

import { TokenTypes } from '../../../constants/bhaiLangSpec';
import { ExpressionType } from '../../../constants/constants';

import Expression from './expression';


export default class ExpressionStatement extends Statement {


  getStatement() {
    const expression = Expression.getExpressionImpl(ExpressionType.AdditiveExpression).getExpression(); 
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: 'ExpressionStatement',
      expression 
    }; 
  }
}
