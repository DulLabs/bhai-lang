import Visitor from ".";
import { ASTNode, NodeType } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import { BooleanObject, NullObject, sanatizeData } from "../dataClass";

export default class VariableDeclaration implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.id || !node.init) {
      throw new InvalidStateException(`id or init not found for ${node.type}`);
    }

    const identifier = node.id.name;

    let value;

    if (node.init.type === NodeType.NullLiteral) value = new NullObject();
    else if (node.init.type === NodeType.BooleanLiteral)
      value = new BooleanObject(node.init.value === "sahi" ? true : false);
    else
      value = sanatizeData(InterpreterModule.getVisitor(node.init.type).visitNode(node.init));

    const currentScope = InterpreterModule.getCurrentScope();

    if (identifier) {
      currentScope.declare(identifier, value);
    }
  }
}
