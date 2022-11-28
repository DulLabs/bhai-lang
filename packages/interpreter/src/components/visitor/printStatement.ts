import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import { sanatizeData } from "../dataClass";


export default class PrintStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.expressions)
      throw new InvalidStateException(
        `No expressions to print: ${node.expressions}`
      );

    const value = node.expressions
      .map((expression: ASTNode) => {
          let currentNodeOutput = sanatizeData(InterpreterModule.getVisitor(expression.type).visitNode(expression));
          return currentNodeOutput?.getStringValue();
        }
      ).join(" ");
    console.log(value);
  }
}
