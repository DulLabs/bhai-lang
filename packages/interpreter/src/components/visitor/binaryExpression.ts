import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const left = InterpreterModule.getVisitor(node.left.type).visitNode(
      node.left
    );
    const right = InterpreterModule.getVisitor(node.right.type).visitNode(
      node.right
    );
    return getOperationValue({ left, right }, node.operator);
  }
}
