import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class AssignmentExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left)
      throw new InvalidStateException(`left node not present while executing: ${node.type}`);

    let identifier = node.left.name;
    let value: unknown;
    const currentScope = InterpreterModule.getCurrentScope();

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );
    }

    if (identifier && node.operator) {
      const newValue = getOperationValue(
        { left: currentScope.get(identifier), right: value },
        node.operator
      );
      currentScope.assign(identifier, newValue);
    }
  }
}
