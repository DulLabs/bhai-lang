import Visitor from ".";
import { ASTNode } from "didi-lang-parser";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
