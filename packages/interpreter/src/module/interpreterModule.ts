import { NodeType } from "bhai-lang-parser";

import InitStatement from "../components/visitor/initStatement";
import PrintStatement from "../components/visitor/printStatement";
import Program from "../components/visitor/program";
import StringLiteral from "../components/visitor/stringLiteral";

export default class InterpreterModule {
  private static _visitorMap = {
    [NodeType.Program]: new Program(),
    [NodeType.InitStatement]: new InitStatement(),
    [NodeType.PrintStatement]: new PrintStatement(),
    [NodeType.StringLiteral]: new StringLiteral(),
  } as Record<string, any>;

  static getVisitor(nodeType: string) {
    const visitor = InterpreterModule._visitorMap[nodeType];
    if (visitor) {
      return visitor;
    }
  }
}
