import { ASTNode } from "bhai-lang-parser";


export default abstract class Visitor {
  abstract visitNode(node: ASTNode): unknown;
}
