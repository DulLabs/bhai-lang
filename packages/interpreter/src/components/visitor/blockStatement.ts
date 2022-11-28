import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class BlockStatement implements Visitor {
  visitNode(node: ASTNode) {
    const parentScope = InterpreterModule.getCurrentScope();
    InterpreterModule.setCurrentScope(new Scope(parentScope));

    InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
    InterpreterModule.getCurrentScope().setFunction(parentScope.isFunction());

    if (Array.isArray(node.body)) {
      node.body.every((statement: ASTNode) => {
        InterpreterModule.getVisitor(statement.type).visitNode(statement);
        if (InterpreterModule.getCurrentScope().isBreakStatement()) {
          return false;
        }
        if (InterpreterModule.getCurrentScope().isContinueStatement()) {
          parentScope.setContinueStatement(true);
          return false;
        }
        if (InterpreterModule.getCurrentScope().isReturnStatement() && parentScope.isFunction()) {
          let retValue = InterpreterModule.getCurrentScope().getReturnValue();
          parentScope.setReturnStatement(true, retValue);
          return false;
        }

        return true;
      });
    }

    parentScope.setBreakStatement(InterpreterModule.getCurrentScope().isBreakStatement());

    InterpreterModule.setCurrentScope(parentScope);
  }
}
