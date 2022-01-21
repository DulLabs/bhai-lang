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

    if (identifier) {
      currentScope.set(identifier, value);
    }
  }
}
