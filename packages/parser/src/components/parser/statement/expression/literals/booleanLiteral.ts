import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class BooleanLiteral extends Literal {
  getLiteral(): ASTNode {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BOOLEAN_TYPE
    );
    return {
      type: NodeType.BooleanLiteral,
      value: token.value,
    };
  }
}
