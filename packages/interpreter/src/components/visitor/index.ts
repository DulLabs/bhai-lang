import { ASTNode } from "didi-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
