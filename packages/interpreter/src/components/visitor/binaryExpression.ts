import Visitor from ".";
import { ASTNode, NodeType } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import NallaPointerException from "../../exceptions/nallaPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";
import { sanatizeData } from "../dataClass";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!=") {
        this._checkNalla(node);
        this._checkBoolean(node);
      } 
    } else if (node.type == NodeType.LogicalExpression) {
      this._checkNalla(node);
    }
    const left = sanatizeData(InterpreterModule.getVisitor(node.left.type).visitNode(node.left));
    const right = sanatizeData(InterpreterModule.getVisitor(node.right.type).visitNode(node.right));
    return getOperationValue({ left, right }, node.operator);
  }

  private _checkNalla(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const nallaException = new NallaPointerException(
      `Nalla operand ni jamta "${node.operator}" ke sath`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw nallaException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null||value.getValue()==null) throw nallaException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null||value.getValue()==null) throw nallaException;
    }
  }

  private _checkBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `Kya kar rha hai tu??..Boolean operand ni jamta "${node.operator}" ke sath`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value.getValue() === true || value.getValue() === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value.getValue() === true || value.getValue() === false) throw runtimeException;
    }
  }
}
