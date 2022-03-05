import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import RuntimeException from "../../exceptions/runtimeException";
import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class WhileStatement implements Visitor {
  visitNode(node: ASTNode) {
    const test = node.test;
    if (test) {
      const getConditionValue = ()=> InterpreterModule.getVisitor(test.type).visitNode(test);
      const start = new Date();

      const parentScope = InterpreterModule.getCurrentScope();

      InterpreterModule.setCurrentScope(new Scope(parentScope));
      
      InterpreterModule.getCurrentScope().setLoop(true);

      for (let testResult = getConditionValue(); testResult === true || testResult === "sahi"; testResult = getConditionValue()) {

        if (InterpreterModule.getCurrentScope().isBreakStatement()) {
          break;
        }

        if (Date.now() - start.getTime() > 1000) {
          throw new RuntimeException("Bohot jyada hi chale jaa rha hai loop");
        }

        const body = node.body;
        if (body && !Array.isArray(body)) {
          InterpreterModule.getVisitor(body.type).visitNode(body);
        }
      }

      InterpreterModule.setCurrentScope(parentScope);
    }
  }
}
