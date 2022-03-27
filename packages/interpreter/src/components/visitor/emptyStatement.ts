import Visitor from ".";
import { ASTNode } from "didi-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
