import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import RuntimeException from "../../exceptions/runtimeException";
import InterpreterModule from "../../module/interpreterModule";

export default class ArrayAccessExpression implements Visitor {
  visitNode(node: ASTNode) {
    const identifier = node.expressions?.[0]!;
    const index = node.expressions?.[1]!;

    const array = InterpreterModule.getVisitor(identifier.type).visitNode(identifier);
    const indexValue = InterpreterModule.getVisitor(index.type).visitNode(index);
    if (typeof indexValue !== 'number') {
      throw new RuntimeException(
        `Bhai, kuch phat gaya: ${identifier.name} mein dekhne ke liye number mangta hai, ${indexValue} nahi.`
      );
    }

    if (!Array.isArray(array)) {
      throw new RuntimeException(
        `Bhai, kuch phat gaya: ${identifier.name} toh array hi nahi hai.`
      );
    }

    return array[indexValue];
  }
}


