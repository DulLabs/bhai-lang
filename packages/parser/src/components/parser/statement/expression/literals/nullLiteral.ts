import Literal from ".";

import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class NullLiteral extends Literal {
  getLiteral(): ASTNode {
    return {
      type: NodeType.NullLiteral,
      value: "ஒன்னுமேயில்லை நண்பா",
    };
  }
}
