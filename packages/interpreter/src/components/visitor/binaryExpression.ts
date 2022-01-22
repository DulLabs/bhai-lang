import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import { checkNumberOperands, checkStringOperands } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression extends Visitor {
  visitNode(node: ASTNode) {
    if (node.left && node.right && node.operator) {
      const left = InterpreterModule.getVisitor(node.left.type)?.visitNode(node.left);
      const right = InterpreterModule.getVisitor(node.right.type)?.visitNode(node.right);
      return this._getValue({ left, right }, node.operator);
    }
  }

  _getValue(operands:{ left: unknown, right: unknown }, operator: string) {
    switch (operator) {
      case "+":
        if(checkNumberOperands(operands)){
          return operands.left + operands.right;
        }

        if(checkStringOperands(operands)){
          return operands.left + operands.right;
        }

        break;
      
      case "-":
        if (checkNumberOperands(operands)) {
          return operands.left - operands.right;
        }

        break;
      
      case "*":
        if (checkNumberOperands(operands)) {
          return operands.left * operands.right;
        }

        break;
      
      case "/":
        if (checkNumberOperands(operands)) {
          return operands.left / operands.right;
        }

        break;
    }
  }
}
