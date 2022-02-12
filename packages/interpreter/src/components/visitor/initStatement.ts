import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";

export default class InitStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (Array.isArray(node.body)) {
      node.body.forEach((statement: ASTNode) => {
        InterpreterModule.getVisitor(statement.type).visitNode(statement);
      });
    }
  }
}
