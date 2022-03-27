import Visitor from ".";
import { ASTNode } from "didi-lang-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
