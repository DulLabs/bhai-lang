import RuntimeException from "../exceptions/runtimeException";
import { ClassInstanceObject, DataObject, DataTypes, NullObject, sanatizeData } from "./dataClass";


export default class Scope {
  _variables: Map<string, DataObject> = new Map();
  _isLoop = false;
  _isFunction=false;
  _isBreakStatement = false;
  _isContinueStatement = false;
  _parentScope: Scope | null;
  _isReturnStatement=false;
  _returnVal:any=null;

  constructor(parentScope: Scope | null) {
    this._parentScope = parentScope;
  }

  isFunction(){
    return this._isFunction;
  }

  setFunction(isFunction:boolean){
    this._isFunction=isFunction;
  }
  setReturnStatement(isReturnStatement: boolean,returnValue:any) {
    this._isReturnStatement=isReturnStatement;
    this._returnVal=returnValue;
  }
  isReturnStatement() {
    return this._isReturnStatement;
  }
  getReturnValue(){
    if(!this._returnVal) this._returnVal=new NullObject();
    return this._returnVal;
  }

  isLoop() {
    return this._isLoop;
  }

  setLoop(isLoop: boolean) {
    this._isLoop = isLoop;
  }

  setBreakStatement(isBreakStatement: boolean) {
    this._isBreakStatement = isBreakStatement;
  }

  setContinueStatement(isContinueStatement: boolean) {
    this._isContinueStatement = isContinueStatement;
  }

  isBreakStatement() {
    return this._isBreakStatement;
  }

  isContinueStatement() {
    return this._isContinueStatement;
  }

  get(identifier: string): DataObject {
    let idChain=identifier.split(".");
    let id=idChain[0];
    if (this._variables.has(id)) {
      let data = this._variables.get(id);
      if(idChain.length>1&&data){
        if(data.getType()==DataTypes.ClassInsance){
          let classInstance=data as ClassInstanceObject;
          let classScope=classInstance.getScope();
          classScope.get(idChain.slice(1).join("."));
        }
      }
      let value = sanatizeData(this._variables.get(identifier));
      return value;
    }

    if (this._parentScope !== null) {
      return this._parentScope.get(identifier);
    }

    throw new RuntimeException(`Variable "${id}" bana to le pehle.`);
  }

  assign(identifier: string, value: DataObject) {
    let idChain=identifier.split(".");
    let id=idChain[0];
    if (this._variables.has(id)) {
      let data = this._variables.get(id);
      if(idChain.length>1&&data){
        if(data.getType()==DataTypes.ClassInsance){
          let classInstance=data as ClassInstanceObject;
          let classScope=classInstance.getScope();
          classScope.assign(idChain.slice(1).join("."),value);
        }
        return
      }
      this._variables.set(identifier, value);
      return;
    }
    if (this._parentScope !== null) {
      this._parentScope.assign(identifier, value);
      return;
    }

    throw new RuntimeException(
      `Variable "${id}" bana to le pehle fir assign karna.`
    );
  }

  declare(identifier: string, value: DataObject) {
    if (this._variables.has(identifier)) {
      throw new RuntimeException(
        `Variable "${identifier}" pehle se exist karta hai bhai. Check karle.`
      );
    }
    value.setScopeRef(this);
    this._variables.set(identifier, value);
  }
}
