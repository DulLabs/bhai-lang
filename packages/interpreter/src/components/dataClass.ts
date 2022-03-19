import { ASTNode } from "bhai-lang-parser";
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
  getStringValue():string{
    return this._value.toString();
  }
}

export class BooleanObject extends DataObject{
  constructor(value: boolean) {
    super(value,DataTypes.Boolean);
  }
  getStringValue(): string {
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
    getStringValue(): string {
        return "nalla";
    }
}

export class CallableObject extends DataObject{
    constructor(value: {args:(string|undefined)[],code:(args:{identifier:string,value:DataObject}[])=>any}) {
        super(value,DataTypes.Callable);
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
}
export class ClassInstanceObject extends DataObject{
    constructor(value:{
        className:string
        dataMembers:Scope
    }) {
        super(value,DataTypes.ClassInsance);
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