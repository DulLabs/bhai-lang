import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class VariableDeclaration extends Visitor{
  visitNode(node: ASTNode) {
    if (node.id && node.init) {
      const identifier = InterpreterModule.getVisitor(node.id.type)?.visitNode(node.id);
      const value = InterpreterModule.getVisitor(node.init.type)?.visitNode(node.init);
      const currentScope = InterpreterModule.getCurrentScope();
      if (typeof identifier === "string") {
        currentScope.declare(identifier, value);
      }
    }
  }
}
