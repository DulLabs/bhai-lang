import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class FunctionStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.declaration)
      throw new InvalidStateException(
        `funda declarations in funda statement is not present: ${node.declaration}`
      );    
      InterpreterModule.getVisitor(node.declaration.type).visitNode(node.declaration);
  }
}
