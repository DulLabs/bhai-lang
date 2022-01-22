import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class Program extends Visitor {
  visitNode(node: ASTNode) {
    if (!Array.isArray(node.body) && node.body?.type) {
      InterpreterModule.getVisitor(node.body?.type)?.visitNode(node.body);
    }
  }
}
