import { NodeType } from "bhai-lang-parser";

import Scope from "../components/scope";
import Visitor from "../components/visitor";
import BlockStatement from "../components/visitor/blockStatement";
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
    [NodeType.BlockStatement]: new BlockStatement(),
    [NodeType.StringLiteral]: new StringLiteral(),
    [NodeType.NumericLiteral]: new NumericLiteral(),
    [NodeType.BooleanLiteral]: new BooleanLiteral(),
  } as Record<string, Visitor>;

  private static _currentScope: Scope;

  static getVisitor(nodeType: string) {
    const visitor = InterpreterModule._visitorMap[nodeType];
    if (visitor) {
      return visitor;
    }
  }

  static getCurrentScope() {
    this._currentScope = this._currentScope ?? new Scope(null);
    return this._currentScope;
  }

  static setCurrentScope(scope: Scope) {
    this._currentScope = scope;
  }
}
