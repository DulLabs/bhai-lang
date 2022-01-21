import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";


export default class VariableStatement extends Visitor {
  visitNode(node: ASTNode) {
    node.declarations?.forEach(declaration => { 
      InterpreterModule.getVisitor(declaration.type)?.visitNode(declaration);
    })
  }
}
