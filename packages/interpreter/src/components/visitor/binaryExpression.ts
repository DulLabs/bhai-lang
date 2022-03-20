import Visitor from ".";
import { ASTNode, NodeType } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import NallaPointerException from "../../exceptions/nallaPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";
import { CallableObject, ClassInstanceObject, DataObject, DataTypes, NullObject, sanatizeData } from "../dataClass";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    let left:DataObject=new NullObject(), right:DataObject=new NullObject();

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!="&&node.operator !==".") {
        this._checkNalla(node);
        this._checkBoolean(node);
      } 
      else if (node.operator === ".") {
        return this.performDotOperation(node);
        
      }
    } else if (node.type == NodeType.LogicalExpression) {
      this._checkNalla(node);
    }
    
    left = sanatizeData(InterpreterModule.getVisitor(node.left.type).visitNode(node.left));
    right = sanatizeData(InterpreterModule.getVisitor(node.right.type).visitNode(node.right));

    return getOperationValue({ left, right }, node.operator);
  }

  private _checkNalla(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const nallaException = new NallaPointerException(
      `Nalla operand ni jamta "${node.operator}" ke sath`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw nallaException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null||value.getValue()==null) throw nallaException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null||value.getValue()==null) throw nallaException;
    }
  }

  private _checkBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `Kya kar rha hai tu??..Boolean operand ni jamta "${node.operator}" ke sath`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value.getValue() === true || value.getValue() === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value.getValue() === true || value.getValue() === false) throw runtimeException;
    }
  }

  private performDotOperation(node: ASTNode):DataObject {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const left = sanatizeData(InterpreterModule.getVisitor(node.left.type).visitNode(node.left));

    if (left instanceof NullObject) {
      throw new NallaPointerException(
        `Nalla operand ni jamta "${node.operator}" ke sath`
      );
    }
    if(!(left instanceof ClassInstanceObject)){
      console.log(left.getType());
      
      throw new RuntimeException(
        `Kya kar rha hai tu??..${left.toString()} operand ni jamta "${node.operator}" ke sath`
      );
    }
    if(node.right.type===NodeType.IdentifierExpression&&node?.right?.name)
      return left.getMember(node.right.name);
    
    if(node.right.type===NodeType.CallableExpression&&node?.right?.name){
      const member = left.getMember(node.right.name);
      if(member.getType()!==DataTypes.Callable)
        throw new RuntimeException(
          `Kya kar rha hai tu??..${left.toString()} ka ${node.right.name} karke koi funda hai hi nahi`
        );
      const args:{identifier:string,value:DataObject}[]=[];
      const providedArgs=node.right.args;
      if(member.getValue().args){
        for (let i = 0; i < (member as CallableObject).getValue().args.length; i++) {
          const identifier = (member as CallableObject).getValue().args[i];
          if(!identifier) throw new RuntimeException(
            `Kya kar rha hai tu??..${left.toString()} ka ${node.right.name} karke koi funde ke argument me garbar hai`
          );
          if(providedArgs&&providedArgs[i]){
            args.push({identifier,value:sanatizeData(InterpreterModule.getVisitor(providedArgs[i].type).visitNode(providedArgs[i]))});
          }
        }
        return (member as CallableObject).getValue().code(args);
      }
    }
    throw new RuntimeException(
      `Kya kar rha hai tu??..${left.toString()} operand ni jamta "${node.operator}" ke sath`
    );
  }

}
