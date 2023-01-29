import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import NallaPointerException from "../../exceptions/nallaPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class AssignmentExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left)
      throw new InvalidStateException(
        `left node not present while executing: ${node.type}`
      );

    let identifier: string | undefined;
    let index: number | undefined;
    let value: unknown;

    if (node.left.expressions) {
      // must be an array access expression on LHS
      identifier = node.left.expressions?.[0]!.name;
      const indexNode = node.left.expressions?.[1]!;
      const indexVal = InterpreterModule.getVisitor(indexNode.type).visitNode(indexNode);
      if (typeof indexVal !== 'number') {
        throw new RuntimeException(
          `Bhai, kuch phat gaya: \`${identifier}\` array mein dekhne ke liye number mangta hai, "${indexVal}" nahi.`
        );
      }
      index = indexVal as number;
    } else {
      // regular identifier LHS
      identifier = node.left.name;
    }

    const currentScope = InterpreterModule.getCurrentScope();

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );
    }

    if (identifier && node.operator) {
      if (index) {
        // assign array
        const array: any[] = currentScope.get(identifier) as any[];
        if (!Array.isArray(array)) {
          throw new RuntimeException(
            `Bhai, kuch phat gaya: \`${identifier}\` toh array hi nahi hai.`
          );
        }

        const newValue = this._getNewValue(array[index], value, node.operator);
        currentScope.assignArray(identifier, index, newValue);

        const updatedArray = currentScope.get(identifier) as any[];
        return updatedArray[index];
      }

      const newValue = this._getNewValue(currentScope.get(identifier), value, node.operator);
      currentScope.assign(identifier, newValue);

      return currentScope.get(identifier);
    }
  }

  _getNewValue(left: unknown, value: unknown, operator: string): unknown {
    if (left === null && operator !== "=")
      throw new NallaPointerException(
        `Nalla operand ni jamta "${operator}" ke sath`
      );

    if ((left === true || left === false) && operator !== "=")
      throw new RuntimeException(
        `Boolean operand ni jamta "${operator}" ke sath`
      );

     return getOperationValue(
      { left: left, right: value },
      operator
    );
  }
}
