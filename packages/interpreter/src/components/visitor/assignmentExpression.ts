import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import { checkNumberOperands, checkStringOperands } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class AssignmentExpression extends Visitor {
  visitNode(node: ASTNode) {
    let identifier = node.left?.name;
    let value: unknown;
    const currentScope = InterpreterModule.getCurrentScope();

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type)?.visitNode(node.right);
    }

    if (identifier && node.operator) {
      const newValue = this._getNewvalue({ left:currentScope.get(identifier), right: value }, node.operator);
      currentScope.assign(identifier, newValue);
    }
  }

  private _getNewvalue(operands:{left:unknown, right:unknown}, operator: string) {
    switch (operator) {
      case "=":
        return operands.right;
      
      case "+=":
        if (checkNumberOperands(operands)) {
          return operands.left + operands.right;
        }

        if (checkStringOperands(operands)) {
          return operands.left + operands.right;
        }

        break;
      
      case "-=":
        if (checkNumberOperands(operands)) {
          return operands.left - operands.right;
        }
        
        break;
        
        case "*=":
          if (checkNumberOperands(operands)) {
            return operands.left * operands.right;
          }
          
          break;
          
          case "/=":
            if (checkNumberOperands(operands)) {
              return operands.left / operands.right;
        }

        break;
    }
  }
}
