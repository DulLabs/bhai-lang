import { ASTNode } from "bhai-lang-parser";
import InterpreterModule from "../module/interpreterModule";
import Scope from "./scope";

export enum DataTypes{
    Null='null',
    Boolean='boolean',
    Numeric='numeric',
    String='string',
    Callable='callable',
    Class='classDefinition',
    ClassInsance='classInstance',
}
export class DataObject {
  protected _value: any;
  protected _type:string;
  public isDataObject:boolean;

  constructor(value: any,type:string) {
    this._value = value;
    this._type = type;
    this.isDataObject=true;
  }

  getValue(): any {
    return this._value;
  }
  getType():string{
    return this._type;
  }
  valueOf(){
    return this._value;
  }
  toString(){
    return this._value.toString();
  }
}

export class BooleanObject extends DataObject{
  constructor(value: boolean) {
    super(value,DataTypes.Boolean);
  }
  toString(): string {
    return this._value?"sahi":"galat";
  }
}

export class NumericObject extends DataObject{
    constructor(value: number) {
        super(value,DataTypes.Numeric);
    }
}

export class StringObject extends DataObject{
    constructor(value: string) {
        super(value,DataTypes.String);
    }
}

export class NullObject extends DataObject{
    constructor() {
        super(null,DataTypes.Null);
    }
    toString(): string {
        return "nalla";
    }
}

export class CallableObject extends DataObject{
    constructor(value: {
        args:(string|undefined)[],
        code:(args:{identifier:string,value:DataObject}[])=>any
    }) {
        super(value,DataTypes.Callable);
    }
    getValue():{
        args:(string|undefined)[],
        code:(args:{identifier:string,value:DataObject}[])=>any
    } {
        return this._value
    }
}

export class ClassObject extends DataObject{
    constructor(value: {
        name:string,
        methods:ASTNode[],
        dataMembers:string[]
        }) {
        super(value,DataTypes.Class);
        this.name=value.name;
        this.methods=value.methods;
        this.dataMembers=value.dataMembers;
    }
    name:string;
    methods:ASTNode[];
    dataMembers:string[];
    getMembers():string[]{
        return this.dataMembers;
    }
    getMethods():ASTNode[]{
        return this.methods;
    }
}
export class ClassInstanceObject extends DataObject{
    
    constructor(value:{
        className:string
        members:Scope
        methods:{[identifier:string]:ASTNode}
        superClasses?:ClassInstanceObject
    }) {
        super(value,DataTypes.ClassInsance);
        
        this._value.members.declare('iska',this);// defining this pointer

        Object.keys(this._value.methods).forEach(methodName=>{
            let methodAst=this._value.methods[methodName]
            let currentScope=InterpreterModule.getCurrentScope()
            InterpreterModule.setCurrentScope(this._value.members)
            let method=sanatizeData(InterpreterModule.getVisitor(methodAst.type).visitNode(methodAst));
            InterpreterModule.setCurrentScope(currentScope)
            this._value.members.declare(methodName,method)
        })
    }
    getScope(){
        return this._value.members
    }
    getMember(name:string):DataObject{
        let member=this._value.members.get(name);
        if(!member){
            for (let i = 0; i < this._value.superClasses.length; i++) {
                const superClass = this._value.superClasses[i];
                member = superClass.getMember(name)
                if(member){
                    break;
                }
            }
        }
        return member;
    }
    toString() {
        return `Class: ${this._value.className}`;
    }
    
}

export function sanatizeData(data:any|unknown):DataObject{
    if((data==null)||(data==undefined)){
        return new NullObject();
    }
    if(typeof data=='boolean'){
        return new BooleanObject(data);
    }
    if(typeof data=='number'){
        return new NumericObject(data);
    }
    if(typeof data=='string'){
        return new StringObject(data);
    }
    if(typeof data=='function'){
        return new CallableObject(data);
    }
    if(typeof data=='object' && data.isDataObject){
        return data as DataObject;
    }
    else  throw new Error(`Ye kya kar raha hai: "${data}" sahi nhi hai. ye konsa data type hai bhai`);
}