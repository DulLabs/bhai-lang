import { ExpressionType } from '../../../../constants/constants';
import BhaiLangModule from '../../../../module/bhaiLangModule';
import TokenExecutor from '../../tokenExecutor';


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }
  
  abstract getExpression(): any

  static getExpressionImpl(expression: keyof typeof ExpressionType):any {
    switch (expression) {
      case ExpressionType.AdditiveExpression:
        return BhaiLangModule.getAdditiveExpression();
      
      case ExpressionType.MultiplicativeExpression:
        return BhaiLangModule.getMultiplicativeExpression();
      
      case ExpressionType.PrimaryExpression:
        return BhaiLangModule.getPrimaryExpression();

      case ExpressionType.ParanthesizedExpression:
        return BhaiLangModule.getParanthesizedExpression();
    }
    
  }
}
