import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import { sanatizeData } from "../dataClass";
import RuntimeException from "../../exceptions/runtimeException";


export default class ReturnStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (InterpreterModule.getCurrentScope().isFunction()) {
    if (!node.expression)
      throw new InvalidStateException(
        `No expressions to print: ${node.expressions}`
      );
      let retVal= sanatizeData(InterpreterModule.getVisitor(node.expression.type).visitNode(node.expression));
      InterpreterModule.getCurrentScope().setReturnStatement(true,retVal);
      return retVal;
    }
    else{
      throw new RuntimeException(`Kya "rakh le bhai"?? Funda kidhar hai?`);
    }
  }
}
