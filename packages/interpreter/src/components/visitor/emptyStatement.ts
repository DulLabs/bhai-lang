import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";


export default class EmptyStatement extends Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
