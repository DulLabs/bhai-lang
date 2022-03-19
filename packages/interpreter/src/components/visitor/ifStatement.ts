import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class IfStatement implements Visitor {

  private evaluateNode(node: ASTNode | undefined, parentScope: Scope) {
    if (node) {
      InterpreterModule.setCurrentScope(new Scope(parentScope));
      InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
      InterpreterModule.getVisitor(node.type).visitNode(node);
    }
  }

  visitNode(node: ASTNode) {
    const test = node.test;
    const parentScope = InterpreterModule.getCurrentScope();
    if (test) {
      const testResult = InterpreterModule.getVisitor(test.type).visitNode(test);
      if (testResult === true || testResult === "sahi") {
        this.evaluateNode(node.consequent, parentScope);
      } else {
        const alternates = node.alternates;
        if (alternates && alternates.length > 0) {
          for (var alternate of alternates) {
            const alternateTest = alternate.test;
            if (!alternateTest) {
              // Reached the "warna bhai" node in the alternate list, simply evaluate it and break
              this.evaluateNode(alternate, parentScope);
              break;
            } else {
              // Evaluate the "test" condition of the "nahi to bhai" node
              // If the condition is true, evaluate the node and break
              const testResult = InterpreterModule.getVisitor(alternateTest!.type).visitNode(alternateTest);
              if (testResult === true || testResult === "sahi") {
                this.evaluateNode(alternate.consequent, parentScope);
                break;
              }
            }
          }
        }
      }
    }
    parentScope.setBreakStatement(InterpreterModule.getCurrentScope().isBreakStatement());
    parentScope.setContinueStatement(InterpreterModule.getCurrentScope().isContinueStatement());

    InterpreterModule.setCurrentScope(parentScope);
  }
}
