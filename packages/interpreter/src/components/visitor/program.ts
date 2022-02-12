import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class Program implements Visitor {
  visitNode(node: ASTNode) {
    if (Array.isArray(node.body) || !node.body)
      throw new InvalidStateException(`Invalid node body for : ${node.type}`);

    InterpreterModule.getVisitor(node.body.type).visitNode(node.body);
  }
}
