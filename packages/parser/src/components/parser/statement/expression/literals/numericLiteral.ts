import Literal from ".";

import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class NumericLiteral extends Literal {
  getLiteral(): ASTNode {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.NUMBER_TYPE
    );
    return {
      type: NodeType.NumericLiteral,
      value: Number(token.value),
    };
  }
}
