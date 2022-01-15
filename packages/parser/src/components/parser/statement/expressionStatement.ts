import Statement from '.';

import { TokenTypes } from '../../../constants/bhaiLangSpec';

import Expression from './expression';
import { ExpressionType } from './expression/constants';


export default class ExpressionStatement extends Statement {


  getStatement() {
    const expression = Expression.getExpressionImpl(ExpressionType.AdditiveExpression); 
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    return {
      type: 'ExpressionStatement',
      expression 
    }; 
  }
}
