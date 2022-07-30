import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";
import { CallableObject, DataObject } from "../dataClass";

export default class FunctionDeclaration implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.signature || !node.body||!node) {
      throw new InvalidStateException(`id or body not found for ${node.type}`);
    }

    const functionName = node.signature.name

    let value;
    const body = node.body;
    if (body && !Array.isArray(body)) {
      let scope=InterpreterModule.getCurrentScope()
      value={
        args:node.signature.args?.map(arg=>arg.id?.name)||[],
        code:(args:{identifier:string,value:DataObject}[]):any=>{
          let oldScope=InterpreterModule.getCurrentScope()
          let newScope=new Scope(scope)
          args.forEach(arg=>{
            newScope.declare(arg.identifier,arg.value)
          })
          newScope.setFunction(true);
          InterpreterModule.setCurrentScope(newScope)
          InterpreterModule.getVisitor(body.type).visitNode(body);
          let result=newScope.getReturnValue()
          InterpreterModule.setCurrentScope(oldScope)
          return result
        }
      }
      return new CallableObject(value);
    }
    else{
      throw new InvalidStateException(`body not found for ${node.type}`);
    }
    
  }
}
