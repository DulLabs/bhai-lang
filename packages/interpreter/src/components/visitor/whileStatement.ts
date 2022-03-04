import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class WhileStatement implements Visitor {
  visitNode(node: ASTNode) {
    const test = node.test;
    if (test) {
       const getConditionValue = ()=> InterpreterModule.getVisitor(test.type).visitNode(test);
      const start = new Date();

      for (let testResult = getConditionValue(); testResult === true || testResult === "sahi"; testResult = getConditionValue()) {

        if (Date.now() - start.getTime() > 1000) {
          throw new Error("Timeout");
        }


        const body = node.body;
        if (body && !Array.isArray(body)) {
          InterpreterModule.getVisitor(body.type).visitNode(body);
        }
      }
    }
  }
}
