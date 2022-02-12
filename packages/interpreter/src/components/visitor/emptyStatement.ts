import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
