import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";
import { NumericObject } from "../dataClass";
import RuntimeException from "../../exceptions/runtimeException";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if(typeof node.value!=="number")
      throw new RuntimeException(`Ye kya kar raha hai: "${node.value}" sahi nhi hai ${node.type} me. isme number dal`);
    return new NumericObject(node.value);
  }
}
