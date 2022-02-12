import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class StringLiteral extends Literal {
  getLiteral(): ASTNode {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.STRING_TYPE
    );
    return {
      type: NodeType.StringLiteral,
      value: token.value.slice(1, -1),
    };
  }
}
