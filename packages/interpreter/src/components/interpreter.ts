import parser from "bhai-lang-parser";

import InterpreterModule from "../module/interpreterModule";

import Scope from "./scope";

export default class Interpreter {
  _parser: typeof parser;
  _scope: Scope;

  constructor(parserObj: typeof parser, scope: Scope) {
    this._parser = parserObj;
    this._scope = scope;
  }

  interpret(code: string) {
    try {
      const ast = this._parser.parse(code);
      InterpreterModule.getVisitor(ast.type).visitNode(ast);
    } finally {
      // reset the scope for next run
      InterpreterModule.setCurrentScope(new Scope(null));
    }
  }
}
