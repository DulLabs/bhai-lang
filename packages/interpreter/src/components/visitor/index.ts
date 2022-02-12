import { ASTNode } from "bhai-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
