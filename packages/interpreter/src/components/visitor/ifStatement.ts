import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class IfStatement implements Visitor {
  visitNode(node: ASTNode) {
    const test = node.test;
    if (test) {
      const testResult = InterpreterModule.getVisitor(test.type).visitNode(test);
      if (testResult === true || testResult === "sahi") {
        const consequent = node.consequent;
        if (consequent) {
           InterpreterModule.getVisitor(consequent.type).visitNode(consequent);
        }
      } else {
        const alternate = node.alternate;
        if (alternate) {
          InterpreterModule.getVisitor(alternate.type).visitNode(alternate);
        }
      }
    } 
  }
}
