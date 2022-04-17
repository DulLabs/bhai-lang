import { ASTNode } from "bhai-lang-parser";
import { DataObject } from "../dataClass";

export default interface Visitor {
  visitNode(node: ASTNode): DataObject|null|void;
}
