import Visitor from ".";
import { ASTNode, NodeType } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";
import { CallableObject, ClassInstanceObject, DataObject, NullObject, sanatizeData } from "../dataClass";

export default class ClassDeclaration implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.id || !node.body||!node) {
      throw new InvalidStateException(`id or body not found for ${node.type}`);
    }

    const identifier = node.id.name;
    if (!identifier) {
      throw new InvalidStateException(`name deke samjha na bhai isko, ${node.type}`);
    }

    const inherits = node.inherits?.map(inherit => inherit?.name).filter(x=>x) ||[];
    if (!node.body || Array.isArray(node.body))
      throw new InvalidStateException(`body not found for class`);

    const {classMethods,classVariables} = this.getClassMembers(node.body);
    let value:{args:(string|undefined)[],code:(args:{identifier:string,value:DataObject}[])=>any};
    const classConstructor=classMethods["janam"];
    let classConstructorArgs:string[]=[];
    if(classConstructor){
      classConstructorArgs=(classConstructor?.id?.args?.map(param=>param?.name).filter(arg => arg)||[])as string[];
    }
    value={
      args:classConstructorArgs,
      code:(args:{identifier:string,value:DataObject}[]):any=>{
        let oldScope=InterpreterModule.getCurrentScope()
        const classInstance = this.createClassInstance(identifier,classVariables,classMethods,inherits as string[]);
        const classScope=classInstance.getValue().members;
        let newScope=new Scope(classScope)
        args.forEach(arg=>{
          newScope.declare(arg.identifier,arg.value)
        })
        newScope.declare("iska",classInstance)
        newScope.setFunction(true);
        InterpreterModule.setCurrentScope(newScope)
        if(classConstructor)InterpreterModule.getVisitor(classConstructor.type).visitNode(classConstructor);
        InterpreterModule.setCurrentScope(oldScope)
        return classInstance
      }
    }
    const currentScope = InterpreterModule.getCurrentScope();

    if (identifier) {
      currentScope.declare(identifier, new CallableObject(value));
    }
  }
  getClassMembers(body:ASTNode){
    if(!body){
      throw new InvalidStateException(`body not found for`);
    }
    if(body.type!=NodeType.BlockStatement){
      throw new InvalidStateException(`body not found for`);
    }
    let classBody=body.body;
    if(!classBody){
      throw new InvalidStateException(`body not found for class`);
    }
    if(!Array.isArray(classBody)){
      throw new InvalidStateException(`body not found for class`);
    }
    let classMethods:{[identifier:string]:ASTNode}={}
    let classVariables:string[]=[]
    classBody.forEach(member=>{
      if(member.type!=NodeType.FunctionStatement&&member.type!=NodeType.VariableStatement){
        throw new InvalidStateException(`Sirf funda or variable me shamjha na bhai`);
      }
      if(member.type==NodeType.FunctionStatement){
        if(member?.declaration?.id?.name)
          classMethods[member?.declaration?.id?.name]=member.declaration;
      }
      else {
        let dataMembers=member.declarations?.map(declaration=>declaration?.id?.name)||[];
        dataMembers=dataMembers.filter(member=>member);
        classVariables=classVariables.concat(dataMembers as string[]);
      }

    })
    return {classMethods,classVariables};
  }
  createClassInstance(identifier:string,classVariables:string[],classMethods:{[identifier:string]:ASTNode},inherits:string[]){

    let classScope=new Scope(InterpreterModule.getCurrentScope());
    classVariables.forEach(variable=>{
      classScope.declare(variable,new NullObject())
    })
    let classInstance=new ClassInstanceObject({className:identifier,members:classScope});
    return classInstance;
  }
}
