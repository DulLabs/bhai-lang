import Statement from '.';

import { TokenTypes } from '../../../constants/bhaiLangSpec';
import { NodeType } from '../../../constants/constants';


export default class EmptyStatement extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: NodeType.EmptyStatement,
    };
  }
}
