import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";
import RuntimeException from "../../exceptions/runtimeException";
import { StringObject } from "../dataClass";

export default class StringLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if(typeof node.value!=="string")
      throw new RuntimeException(`Ye kya kar raha hai: "${node.value}" sahi nhi hai ${node.name} me. isme sting dal`);
    return new StringObject(node.value);
  }
}
