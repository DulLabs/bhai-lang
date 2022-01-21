import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class InitStatement extends Visitor {
  visitNode(node: ASTNode) {
    if (Array.isArray(node.body)) {
      node.body?.forEach((statement: any) => {
        InterpreterModule.getVisitor(statement.type).visitNode(statement);
      });
    }
  }
}
