import Visitor from ".";
import { ASTNode, NodeType } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import NallaPointerException from "../../exceptions/nallaPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    this._checkNallaAndBoolean(node);

    const left = InterpreterModule.getVisitor(node.left.type).visitNode(
      node.left
    );
    const right = InterpreterModule.getVisitor(node.right.type).visitNode(
      node.right
    );
    return getOperationValue({ left, right }, node.operator);
  }

  private _checkNallaAndBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const nallaException = new NallaPointerException(`Nalla operand ni jamta "${node.operator}" ke sath`);
    const runtimeException = new RuntimeException(`Boolean operand ni jamta "${node.operator}" ke sath`);

    if (node.left.type === NodeType.NullLiteral || node.right.type === NodeType.NullLiteral)
      throw nallaException

    if (node.left.type === NodeType.BooleanLiteral || node.right.type === NodeType.BooleanLiteral)
      throw runtimeException

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name)
      if (value === null)
        throw nallaException
      else if (value === true || value === false)
        throw runtimeException
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name)
      if (value === null)
        throw nallaException
      else if (value === true || value === false)
        throw runtimeException
    }
  }
}
