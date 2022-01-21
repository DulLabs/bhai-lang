import Literal from '.';

import { TokenTypes } from '../../../../../constants/bhaiLangSpec';
import { NodeType } from '../../../../../constants/constants';


export default class BooleanLiteral extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BOOLEAN_TYPE
    );
    return {
      type: NodeType.BooleanLiteral,
      value: token.value,
    };
  }
}
