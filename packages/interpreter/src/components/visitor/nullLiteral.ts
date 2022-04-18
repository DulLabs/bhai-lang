import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";
import { NullObject } from "../dataClass";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if (node.value !== "nalla")
      throw new Error(`Ye kya kar raha hai: "${node.value}" sahi nhi hai. isme nalla dal`);
    return new NullObject();
  }
}
