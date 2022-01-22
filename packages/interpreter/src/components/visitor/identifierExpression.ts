import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class IdentifierExpression extends Visitor {
  visitNode(node: ASTNode) {
    if (typeof node.name === "string") {
      return InterpreterModule.getCurrentScope().get(node.name);
    }  
  }
}
