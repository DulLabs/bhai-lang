import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class VariableDeclaration extends Visitor{
  visitNode(node: ASTNode) {
    if (node.id && node.init) {
      const identifier = node.id?.name;
      const value = InterpreterModule.getVisitor(node.init.type)?.visitNode(node.init);
      const currentScope = InterpreterModule.getCurrentScope();
      if ( identifier) {
        currentScope.declare(identifier, value);
      }
    }
  }
}
