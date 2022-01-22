import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class PrintStatement implements Visitor {
  visitNode(node: ASTNode) {
    const value = node.expressions
      ?.map((expression: ASTNode) =>
        InterpreterModule.getVisitor(expression.type).visitNode(expression)
      )
      .join("");
    console.log(value);
  }
}
