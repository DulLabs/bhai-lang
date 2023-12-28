import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";
import InvalidStateException from "../../exceptions/invalidStateException";
import NallaPointerException from "../../exceptions/nallaPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";

export default class AssignmentExpression implements Visitor {
  visitNode(node: ASTNode) {
    this.validateNode(node);

    const identifier = node.left.name;
    const value = node.right
      ? InterpreterModule.getVisitor(node.right.type).visitNode(node.right)
      : undefined;

    this.handleAssignment(identifier, node.operator, value);

    return InterpreterModule.getCurrentScope().get(identifier);
  }

  private validateNode(node: ASTNode) {
    if (!node.left) {
      throw new InvalidStateException(
        `Left node not present while executing: ${node.type}`
      );
    }
  }

  private handleAssignment(identifier: string, operator: string, value: unknown) {
    const currentScope = InterpreterModule.getCurrentScope();
    const currentValue = currentScope.get(identifier);

    if (currentValue === null && operator !== "=") {
      throw new NallaPointerException(
        `Nalla operand ni jamta "${operator}" ke sath`
      );
    }

    if ((currentValue === true || currentValue === false) && operator !== "=") {
      throw new RuntimeException(
        `Boolean operand ni jamta "${operator}" ke sath`
      );
    }

    const newValue = getOperationValue({ left: currentValue, right: value }, operator);
    currentScope.assign(identifier, newValue);
  }
}
