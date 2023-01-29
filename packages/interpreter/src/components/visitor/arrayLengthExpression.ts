import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import RuntimeException from "../../exceptions/runtimeException";
import InterpreterModule from "../../module/interpreterModule";

export default class ArrayLengthExpression implements Visitor {
  visitNode(node: ASTNode) {
    const identifier = node.expressions?.[0]!;

    const array = InterpreterModule.getVisitor(identifier.type).visitNode(identifier);
    if (!Array.isArray(array)) {
      throw new RuntimeException(
        `Bhai, kuch phat gaya: \`${identifier.name}\` toh array hi nahi hai.`
      );
    }

    return array.length;
  }
}

