import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class IfStatement implements Visitor {
  visitNode(node: ASTNode) {
    const test = node.test;
    const parentScope = InterpreterModule.getCurrentScope();
    if (test) {
      const testResult = InterpreterModule.getVisitor(test.type).visitNode(test);
      if (testResult === "galat" || testResult === "nalla" || !testResult) {
        const alternate = node.alternate;
        if (alternate) {
          InterpreterModule.setCurrentScope(new Scope(parentScope));
          InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
          InterpreterModule.getVisitor(alternate.type).visitNode(alternate);
        }
      } else {
        const consequent = node.consequent;
        if (consequent) {
          InterpreterModule.setCurrentScope(new Scope(parentScope));
          InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
          InterpreterModule.getVisitor(consequent.type).visitNode(consequent);
        }
      }
    } 

    parentScope.setBreakStatement(InterpreterModule.getCurrentScope().isBreakStatement());
    parentScope.setContinueStatement(InterpreterModule.getCurrentScope().isContinueStatement());

    InterpreterModule.setCurrentScope(parentScope);
  }
}
