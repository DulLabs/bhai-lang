import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import { sanatizeData } from "../dataClass";

export default class VariableDeclaration implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.id || !node.init) {
      throw new InvalidStateException(`id or init not found for ${node.type}`);
    }

    const identifier = node.id.name;

    let value= sanatizeData(InterpreterModule.getVisitor(node.init.type).visitNode(node.init));

    const currentScope = InterpreterModule.getCurrentScope();

    if (identifier) {
      currentScope.declare(identifier, value);
    }
  }
}
