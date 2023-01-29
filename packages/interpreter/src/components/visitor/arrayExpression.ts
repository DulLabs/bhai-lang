import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";

export default class ArrayExpression implements Visitor {
  visitNode(node: ASTNode) {
    let values: any[] = [];

    node.expressions?.forEach(expr => {
      const value = InterpreterModule.getVisitor(expr.type).visitNode(expr);
      values.push(value);
    });

    return values;
  }
}

