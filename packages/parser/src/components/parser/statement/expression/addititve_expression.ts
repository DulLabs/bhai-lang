import Expression from '.';

import { TokenTypes } from '../../../../constants/bhaiLangSpec';
import { NodeType } from '../../../../constants/constants';


export default class AdditiveExpression extends Expression {
  getExpression() {
    return this.getBinaryExpression(
      NodeType.MultiplicativeExpression,
      TokenTypes.ADDITIVE_OPERATOR_TYPE
    );
  }
}
