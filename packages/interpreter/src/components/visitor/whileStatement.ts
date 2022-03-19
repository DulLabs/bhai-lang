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

      const parentScope = InterpreterModule.getCurrentScope();

      InterpreterModule.setCurrentScope(new Scope(parentScope));
      
      InterpreterModule.getCurrentScope().setLoop(true);


      for (let testResult = getConditionValue(), executions = 0; testResult === true || testResult === "sahi"; testResult = getConditionValue(), executions++) {

        if (InterpreterModule.getCurrentScope().isBreakStatement()) {
          break;
        }

        if (executions > 5000) {
          throw new RuntimeException("Bohot jyada hi chale jaa rha hai loop");
        }


        if(InterpreterModule.getCurrentScope().isContinueStatement()){
          InterpreterModule.getCurrentScope().setContinueStatement(false);
          continue;
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
