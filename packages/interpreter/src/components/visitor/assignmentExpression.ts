import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class AssignmentExpression extends Visitor {
  visitNode(node: ASTNode) {
    let identifier: string| undefined;
    let value: unknown;
    const currentScope = InterpreterModule.getCurrentScope();

    if (node.left) {
      const nodeReturnValue = InterpreterModule.getVisitor(node.left.type)?.visitNode(node.left);

      if (typeof nodeReturnValue === "string") {
        identifier = nodeReturnValue;
      }
    }

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type)?.visitNode(node.right);
    }

    if (identifier && node.operator) {
      const newValue = this._getNewvalue(currentScope.get(identifier),value, node.operator);
      currentScope.assign(identifier, newValue);
    }
  }

  private _getNewvalue(prevValue:unknown,value: unknown, operator: string) {
    switch (operator) {
      case "=":
        return value;
      
      case "+=":
        if ((typeof prevValue === "number" && typeof value === "number")) {
          return prevValue + value;
        }

        if ((typeof prevValue === "string" && typeof value === "string")) {
          return prevValue + value;
        }

        break;
      
      case "-=":
        if ((typeof prevValue === "number" && typeof value === "number")) {
          return prevValue - value;
        }

        break;
      
      case "*=":
        if ((typeof prevValue === "number" && typeof value === "number")) {
          return prevValue * value;
        }

        break;
      
      case "/=":
        if ((typeof prevValue === "number" && typeof value === "number")) {
          return prevValue / value;
        }

        break;
    }
  }
}
