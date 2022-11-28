import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class DotExpression extends Expression {
  getExpression(): ASTNode {
    return this.getBinaryExpression(
      NodeType.PrimaryExpression,
      TokenTypes.DOT_OPERATOR
    );
  }
}
