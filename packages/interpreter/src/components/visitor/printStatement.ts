import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class PrintStatement extends Visitor {
  visitNode(node: ASTNode) {
    const value = node.expressions
      ?.map((expression: any) =>
        InterpreterModule.getVisitor(expression.type)?.visitNode(expression)
      )
      .join("");
    console.log(value);
  }
}
