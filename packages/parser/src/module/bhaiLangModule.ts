import { Parser } from "../components/parser";
import Program from "../components/parser/program";
import BlockStatement from "../components/parser/statement/blockStatement";
import BreakStatement from "../components/parser/statement/breakStatement";
import ContinueStatement
  from "../components/parser/statement/continueStatement";
import EmptyStatement from "../components/parser/statement/emptyStatement";
import AdditiveExpression
  from "../components/parser/statement/expression/addititveExpression";
import AssignmentExpression
  from "../components/parser/statement/expression/assignmentExpression";
import EqualityExpression
  from "../components/parser/statement/expression/equalityExpression";
import IdentifierExpression
  from "../components/parser/statement/expression/identifierExpression";
import BooleanLiteral
  from "../components/parser/statement/expression/literals/booleanLiteral";
import NullLiteral
  from "../components/parser/statement/expression/literals/nullLiteral";
import NumericLiteral
  from "../components/parser/statement/expression/literals/numericLiteral";
import StringLiteral
  from "../components/parser/statement/expression/literals/stringLiteral";
import LogicalANDExpression
  from "../components/parser/statement/expression/logicalANDExpression";
import LogicalORExpression
  from "../components/parser/statement/expression/logicalORExpression";
import MultiplicativeExpression
  from "../components/parser/statement/expression/multiplicativeExpression";
import ParanthesizedExpression
  from "../components/parser/statement/expression/paranthesizedExpression";
import PrimaryExpression
  from "../components/parser/statement/expression/primaryExpression";
import RelationalExpression
  from "../components/parser/statement/expression/relationalExpression";
import ExpressionStatement
  from "../components/parser/statement/expressionStatement";
import IfStatement from "../components/parser/statement/ifStatement";
import InitStatement from "../components/parser/statement/initStatement";
import PrintStatement from "../components/parser/statement/printStatement";
import VariableStatement
  from "../components/parser/statement/variableStatement";
import WhileStatement from "../components/parser/statement/whileStatement";
import StatementList from "../components/parser/statementList";
import TokenExecutor from "../components/parser/tokenExecutor";
import TokenizerImpl from "../components/tokenizer";
import { Tokenizer } from "../components/tokenizer/types";
import { SPEC } from "../constants/bhaiLangSpec";


export default class BhaiLangModule {
  private static _tokenizer?: Tokenizer;
  private static _initStatement?: InitStatement;
  private static _parser?: Parser;
  private static _program?: Program;
  private static _statementList?: StatementList;
  private static _tokenExecutor?: TokenExecutor;
  private static _expresionStatement?: ExpressionStatement;
  private static _printStatement?: PrintStatement;
  private static _emptyStatement?: EmptyStatement;
  private static _blockStatement?: BlockStatement;
  private static _additiveExpression?: AdditiveExpression;
  private static _multiplicativeExpression?: MultiplicativeExpression;
  private static _primaryExpression?: PrimaryExpression;
  private static _paranthesizedExpression?: ParanthesizedExpression;
  private static _numericLiteral?: NumericLiteral;
  private static _stringLiteral?: StringLiteral;
  private static _idetifierExpression?: IdentifierExpression;
  private static _variableStatement?: VariableStatement;
  private static _ifStatement?: IfStatement;
  private static _assignmentExpression?: AssignmentExpression;
  private static _booleanLiteral?: BooleanLiteral;
  private static _nullLiteral?: NullLiteral;
  private static _equalityExpression?: EqualityExpression;
  private static _logicalANDExpression?: LogicalANDExpression;
  private static _logicalORExpression?: LogicalORExpression;
  private static _relationalExpression?: RelationalExpression;
  private static _breakStatement?: BreakStatement;
  private static _continueStatement?: ContinueStatement;
  private static _whileStatement?: WhileStatement;

  static getTokenizer() {
    if (!this._tokenizer) this._tokenizer = new TokenizerImpl(SPEC);

    return this._tokenizer;
  }

  static getTokenExecutor() {
    if (!this._tokenExecutor)
      this._tokenExecutor = new TokenExecutor(this.getTokenizer());

    return this._tokenExecutor;
  }

  static getStatementList() {
    if (!this._statementList)
      this._statementList = new StatementList(this.getTokenExecutor());

    return this._statementList;
  }

  static getInitStatement() {
    if (!this._initStatement)
      this._initStatement = new InitStatement(
        this.getTokenExecutor(),
        this.getStatementList()
      );

    return this._initStatement;
  }

  static getPrintStatement() {
    if (!this._printStatement) {
      this._printStatement = new PrintStatement(this.getTokenExecutor());
    }

    return this._printStatement;
  }

  static getIfStatement() {
    if (!this._ifStatement) {
      this._ifStatement = new IfStatement(this.getTokenExecutor());
    }

    return this._ifStatement;
  }

  static getBreakStatement() {
    if (!this._breakStatement) {
      this._breakStatement = new BreakStatement(this.getTokenExecutor());
    }

    return this._breakStatement;
  }

  static getContinueStatement() {
    if(!this._continueStatement){
      this._continueStatement = new ContinueStatement(this.getTokenExecutor());
    }

    return this._continueStatement;
  }

  static getWhileStatement() {
    if (!this._whileStatement) {
      this._whileStatement = new WhileStatement(this.getTokenExecutor());
    }

    return this._whileStatement;
  }

  static getExpressionStatement() {
    if (!this._expresionStatement) {
      this._expresionStatement = new ExpressionStatement(
        this.getTokenExecutor()
      );
    }

    return this._expresionStatement;
  }

  static getEmptyStatement() {
    if (!this._emptyStatement) {
      this._emptyStatement = new EmptyStatement(this.getTokenExecutor());
    }

    return this._emptyStatement;
  }

  static getBlockStatement() {
    if (!this._blockStatement) {
      this._blockStatement = new BlockStatement(
        this.getTokenExecutor(),
        this.getStatementList()
      );
    }

    return this._blockStatement;
  }

  static getVariableStatement() {
    if (!this._variableStatement)
      this._variableStatement = new VariableStatement(
        this.getTokenExecutor(),
        this.getNullLiteral()
      );

    return this._variableStatement;
  }

  static getAdditiveExpression() {
    if (!this._additiveExpression) {
      this._additiveExpression = new AdditiveExpression(
        this.getTokenExecutor()
      );
    }

    return this._additiveExpression;
  }

  static getMultiplicativeExpression() {
    if (!this._multiplicativeExpression) {
      this._multiplicativeExpression = new MultiplicativeExpression(
        this.getTokenExecutor()
      );
    }

    return this._multiplicativeExpression;
  }

  static getPrimaryExpression() {
    if (!this._primaryExpression) {
      this._primaryExpression = new PrimaryExpression(this.getTokenExecutor());
    }

    return this._primaryExpression;
  }

  static getParanthesizedExpression() {
    if (!this._paranthesizedExpression) {
      this._paranthesizedExpression = new ParanthesizedExpression(
        this.getTokenExecutor()
      );
    }

    return this._paranthesizedExpression;
  }

  static getIndentifierExpression() {
    if (!this._idetifierExpression)
      this._idetifierExpression = new IdentifierExpression(
        this.getTokenExecutor()
      );

    return this._idetifierExpression;
  }

  static getEqualityExpression() {
    if (!this._equalityExpression)
      this._equalityExpression = new EqualityExpression(
        this.getTokenExecutor()
      );

    return this._equalityExpression;
  }

  static getLogicalANDExpression() {
    if (!this._logicalANDExpression)
      this._logicalANDExpression = new LogicalANDExpression(
        this.getTokenExecutor()
      );

    return this._logicalANDExpression;
  }

  static getLogicalORExpression() {
    if (!this._logicalORExpression)
      this._logicalORExpression = new LogicalORExpression(
        this.getTokenExecutor()
      );

    return this._logicalORExpression;
  }

  static getRelationalExpression() {
    if (!this._relationalExpression)
      this._relationalExpression = new RelationalExpression(
        this.getTokenExecutor()
      );

    return this._relationalExpression;
  }

  static getAssignmentExpression() {
    if (!this._assignmentExpression)
      this._assignmentExpression = new AssignmentExpression(
        this.getTokenExecutor()
      );

    return this._assignmentExpression;
  }

  static getNumericLiteral() {
    if (!this._numericLiteral) {
      this._numericLiteral = new NumericLiteral(this.getTokenExecutor());
    }

    return this._numericLiteral;
  }

  static getStringLiteral() {
    if (!this._stringLiteral) {
      this._stringLiteral = new StringLiteral(this.getTokenExecutor());
    }
    return this._stringLiteral;
  }

  static getBooleanLiteral() {
    if (!this._booleanLiteral) {
      this._booleanLiteral = new BooleanLiteral(this.getTokenExecutor());
    }

    return this._booleanLiteral;
  }

  static getNullLiteral() {
    if (!this._nullLiteral) {
      this._nullLiteral = new NullLiteral(this.getTokenExecutor());
    }

    return this._nullLiteral;
  }

  static getProgram() {
    if (!this._program) this._program = new Program(this.getStatementList());

    return this._program;
  }

  static getParser() {
    if (!this._parser)
      this._parser = new Parser(
        this.getTokenizer(),
        this.getProgram(),
        this.getTokenExecutor()
      );

    return this._parser;
  }
}
