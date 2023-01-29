import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";


export default class PrintStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.expressions)
      throw new InvalidStateException(
        `No expressions to print: ${node.expressions}`
      );

    const value = node.expressions
      .map((expression: ASTNode) => {
        let currentNodeOutput = InterpreterModule.getVisitor(expression.type).visitNode(expression);
        if (currentNodeOutput === true)
          currentNodeOutput = "sahi";
        else if (currentNodeOutput === false)
          currentNodeOutput = "galat";
        else if (Array.isArray(currentNodeOutput)) {
          currentNodeOutput = this._getArrayOutput(currentNodeOutput);
        }
        return currentNodeOutput;
      }
      )
      .join(" ");
    console.log(value);
  }

  _getArrayOutput(values: any[]): string {
    let output = values.map((value) => {
      if (Array.isArray(value)) {
        return this._getArrayOutput(value);
      } else {
        return value;
      }
    });

    return "[" +  output.join(", ") + "]";
  }
}
