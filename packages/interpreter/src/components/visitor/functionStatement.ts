import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import { sanatizeData } from "../dataClass";

export default class FunctionStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.declaration)
      throw new InvalidStateException(
        `funda declarations in funda statement is not present: ${node.declaration}`
      );    
      let functionObject=sanatizeData(InterpreterModule.getVisitor(node.declaration.type).visitNode(node.declaration));
      
      const identifier=node?.declaration?.id?.signature?.name
      if(identifier){
        let scope=InterpreterModule.getCurrentScope();
        scope.declare(identifier,functionObject);
      }
  }
}
