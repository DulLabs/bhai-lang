import { NodeType } from "bhai-lang-parser";

import Visitor from "../components/visitor";
import BooleanLiteral from "../components/visitor/booleanLiteral";
import EmptyStatement from "../components/visitor/emptyStatement";
import InitStatement from "../components/visitor/initStatement";
import NumericLiteral from "../components/visitor/numericLiteral";
import PrintStatement from "../components/visitor/printStatement";
import Program from "../components/visitor/program";
import StringLiteral from "../components/visitor/stringLiteral";


export default class InterpreterModule {
  private static _visitorMap = {
    [NodeType.Program]: new Program(),
    [NodeType.InitStatement]: new InitStatement(),
    [NodeType.PrintStatement]: new PrintStatement(),
    [NodeType.EmptyStatement]: new EmptyStatement(),
    [NodeType.StringLiteral]: new StringLiteral(),
    [NodeType.NumericLiteral]: new NumericLiteral(),
    [NodeType.BooleanLiteral]: new BooleanLiteral(),
  } as Record<string, Visitor>;

  static getVisitor(nodeType: string) {
    const visitor = InterpreterModule._visitorMap[nodeType];
    if (visitor) {
      return visitor;
    }
  }
}
