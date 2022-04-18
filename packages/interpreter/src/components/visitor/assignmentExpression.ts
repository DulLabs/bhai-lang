import Visitor from ".";
import { ASTNode, NodeType} from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";
import { DataObject, NullObject } from "../dataClass";


export default class AssignmentExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left)
      throw new InvalidStateException(
        `left node not present while executing: ${node.type}`
      );
    const identifier=this.getIdentifier(node.left);
    let value: DataObject|null|void=null;
    const currentScope = InterpreterModule.getCurrentScope();

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );
    }
    if(value==null) value =new NullObject()

    if (identifier && node.operator) {
      const newValue = getOperationValue(
        { left: currentScope.get(identifier), right: value },
        node.operator
      );
      currentScope.assign(identifier, newValue);

      return currentScope.get(identifier);
    }
  }
  getIdentifier(node: ASTNode): string {
    if (node.type===NodeType.IdentifierExpression&&node.name){
      return node.name;
    }
    else if (node.type===NodeType.BinaryExpression&&node.operator==="."){
      if(node?.left?.name==null) throw new InvalidStateException(`Left Identifier not found for: ${node.type}`);
      if(node?.right==null) throw new InvalidStateException(`right expression not found for: ${node.type}`);
      if(node.left?.name&&node.right)return node.left.name+"."+this.getIdentifier(node.right);
    }
    throw new InvalidStateException(`Identifier not found for: ${node.type}`);
  }
}
