import parser, { NodeType } from "bhai-lang-parser";

import Interpreter from "../components/interpreter";
import Scope from "../components/scope";
import Visitor from "../components/visitor";
import AssignmentExpression from "../components/visitor/assignmentExpression";
import BinaryExpression from "../components/visitor/binaryExpression";
import BlockStatement from "../components/visitor/blockStatement";
import BooleanLiteral from "../components/visitor/booleanLiteral";
import BreakStatement from "../components/visitor/breakStatement";
import ContinueStatement from "../components/visitor/continueStatement";
import EmptyStatement from "../components/visitor/emptyStatement";
import ExpressionStatement from "../components/visitor/expressionStatement";
import IdentifierExpression from "../components/visitor/identifierExpression";
import IfStatement from "../components/visitor/ifStatement";
import InitStatement from "../components/visitor/initStatement";
import NullLiteral from "../components/visitor/nullLiteral";
import NumericLiteral from "../components/visitor/numericLiteral";
import PrintStatement from "../components/visitor/printStatement";
import Program from "../components/visitor/program";
import StringLiteral from "../components/visitor/stringLiteral";
import VariableDeclaration from "../components/visitor/variableDeclaration";
import VariableStatement from "../components/visitor/variableStatement";
import WhileStatement from "../components/visitor/whileStatement";
import InvalidStateException from "../exceptions/invalidStateException";


export default class InterpreterModule {
  private static _visitorMap = {
    [NodeType.Program]: new Program(),
    [NodeType.InitStatement]: new InitStatement(),
    [NodeType.PrintStatement]: new PrintStatement(),
    [NodeType.EmptyStatement]: new EmptyStatement(),
    [NodeType.BlockStatement]: new BlockStatement(),
    [NodeType.VariableStatement]: new VariableStatement(),
    [NodeType.IdentifierExpression]: new IdentifierExpression(),
    [NodeType.VariableDeclaration]: new VariableDeclaration(),
    [NodeType.AssignmentExpression]: new AssignmentExpression(),
    [NodeType.ExpressionStatement]: new ExpressionStatement(),
    [NodeType.BinaryExpression]: new BinaryExpression(),
    [NodeType.LogicalExpression]: new BinaryExpression(),
    [NodeType.StringLiteral]: new StringLiteral(),
    [NodeType.NumericLiteral]: new NumericLiteral(),
    [NodeType.BooleanLiteral]: new BooleanLiteral(),
    [NodeType.NullLiteral]: new NullLiteral(),
    [NodeType.IfStatement]: new IfStatement(),
    [NodeType.WhileStatement]: new WhileStatement(),
    [NodeType.BreakStatement]: new BreakStatement(),
    [NodeType.ContinueStatement]: new ContinueStatement(),
  } as Record<string, Visitor>;

  private static _currentScope: Scope;
  private static _interpreter: Interpreter;

  static getVisitor(nodeType: string) {
    const visitor = InterpreterModule._visitorMap[nodeType];

    if (!visitor)
      throw new InvalidStateException(
        `Couldn't find any visitor object for nodeType: ${nodeType}`
      );

    return visitor;
  }

  static getInterpreter() {
    this._interpreter =
      this._interpreter ?? new Interpreter(parser, this.getCurrentScope());
    return this._interpreter;
  }

  static getCurrentScope() {
    this._currentScope = this._currentScope ?? new Scope(null);
    return this._currentScope;
  }

  static setCurrentScope(scope: Scope) {
    this._currentScope = scope;
  }
}
