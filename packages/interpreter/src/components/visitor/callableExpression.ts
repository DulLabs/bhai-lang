import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class CallableExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.name) {
      throw new InvalidStateException(`Invalid node name for: ${node.type}`);
    }

    let value:any = InterpreterModule.getCurrentScope().get(node.name);
    let args=[];
    if (value.args) {
      for (let i = 0; i < value.args.length; i++) {
        if(node.args&&node.args[i]){
          args.push({
            identifier:value.args[i],
            value:node.args[i].value
          }); 
        }
        else{
          args.push({
            identifier:value.args[i],
            value:null
          });
        }
      }
    }
    return value.code(args);
  }
}
