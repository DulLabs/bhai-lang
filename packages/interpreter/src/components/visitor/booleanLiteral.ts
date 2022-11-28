import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";
import RuntimeException from "../../exceptions/runtimeException";
import { BooleanObject } from "../dataClass";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if(node.value!=="sahi"&&node.value!=="galat")
      throw new RuntimeException(`Ye kya kar raha hai: "${node.value}" sahi nhi hai ${node.type} me. isme sahi/galat dal`);
    return new BooleanObject(node.value === "sahi" ? true : false);
  }
}
