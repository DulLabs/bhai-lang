import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";

export default class ExpressionStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (node.expression) {
      InterpreterModule.getVisitor(node.expression.type).visitNode(
        node.expression
      );
    }
  }
}
