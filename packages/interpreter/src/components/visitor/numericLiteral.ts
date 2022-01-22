import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";


export default class NumericLiteral extends Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
