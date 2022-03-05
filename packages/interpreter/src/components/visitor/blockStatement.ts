import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class BlockStatement implements Visitor {
  visitNode(node: ASTNode) {
    const parentScope = InterpreterModule.getCurrentScope();
    InterpreterModule.setCurrentScope(new Scope(parentScope));

    InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());

    if (Array.isArray(node.body)) {
      node.body.every((statement: ASTNode) => {
        if (InterpreterModule.getCurrentScope().isBreakStatement()) {
          parentScope.setBreakStatement(true);
          return false;
        }
        InterpreterModule.getVisitor(statement.type).visitNode(statement);
        return true;
      });
    }

    InterpreterModule.setCurrentScope(parentScope);
  }
}
