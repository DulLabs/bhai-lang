import parser, { NodeType } from "bhai-lang-parser";

import Interpreter from "../components/interpreter";
import Scope from "../components/scope";
import Visitor from "../components/visitor";
import AssignmentExpression from "../components/visitor/assignmentExpression";
import BinaryExpression from "../components/visitor/binaryExpression";
import BlockStatement from "../components/visitor/blockStatement";
import BooleanLiteral from "../components/visitor/booleanLiteral";
import BreakStatement from "../components/visitor/breakStatement";
import CallableExpression from "../components/visitor/callableExpression";
import ClassDeclaration from "../components/visitor/classDeclaration";
import ClassStatement from "../components/visitor/classStatement";
import ContinueStatement from "../components/visitor/continueStatement";
import EmptyStatement from "../components/visitor/emptyStatement";
import ExpressionStatement from "../components/visitor/expressionStatement";
import FunctionDeclaration from "../components/visitor/functionDeclaration";
import FunctionStatement from "../components/visitor/functionStatement";
import IdentifierExpression from "../components/visitor/identifierExpression";
import IfStatement from "../components/visitor/ifStatement";
import InitStatement from "../components/visitor/initStatement";
import NullLiteral from "../components/visitor/nullLiteral";
import NumericLiteral from "../components/visitor/numericLiteral";
import PrintStatement from "../components/visitor/printStatement";
import Program from "../components/visitor/program";
import ReturnStatement from "../components/visitor/returnStatement";
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
    [NodeType.FunctionStatement]: new FunctionStatement(),
    [NodeType.FunctionDeclaration]: new FunctionDeclaration(),
    [NodeType.CallableExpression]: new CallableExpression(),
    [NodeType.ReturnStatement]: new ReturnStatement(),
    [NodeType.ClassStatement]: new ClassStatement(),
    [NodeType.ClassDeclaration]: new ClassDeclaration(),

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
