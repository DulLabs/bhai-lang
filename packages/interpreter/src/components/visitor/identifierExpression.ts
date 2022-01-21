import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";


export default class IdentifierExpression extends Visitor {
  visitNode(node: ASTNode) {
    return node.name;      
  }
}
