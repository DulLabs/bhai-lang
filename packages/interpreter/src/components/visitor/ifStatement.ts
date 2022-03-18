import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";
import { DataTypes, sanatizeData } from "../dataClass";


export default class IfStatement implements Visitor {
  visitNode(node: ASTNode) {
    const test = node.test;
    const parentScope = InterpreterModule.getCurrentScope();
    if (test) {
      const testResult = sanatizeData(InterpreterModule.getVisitor(test.type).visitNode(test));
      if (testResult.getType() !== DataTypes.Null && testResult.getValue() === true) {
        const consequent = node.consequent;
        if (consequent) {
          InterpreterModule.setCurrentScope(new Scope(parentScope));
          InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
           InterpreterModule.getVisitor(consequent.type).visitNode(consequent);
        }
      } else {
        const alternate = node.alternate;
        if (alternate) {
          InterpreterModule.setCurrentScope(new Scope(parentScope));
          InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
          InterpreterModule.getVisitor(alternate.type).visitNode(alternate);
        }
      }
    } 

    parentScope.setBreakStatement(InterpreterModule.getCurrentScope().isBreakStatement());
    parentScope.setContinueStatement(InterpreterModule.getCurrentScope().isContinueStatement());

    InterpreterModule.setCurrentScope(parentScope);
  }
}
