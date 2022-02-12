import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class AdditiveExpression extends Expression {
  getExpression(): ASTNode {
    return this.getBinaryExpression(
      NodeType.MultiplicativeExpression,
      TokenTypes.ADDITIVE_OPERATOR_TYPE
    );
  }
}
