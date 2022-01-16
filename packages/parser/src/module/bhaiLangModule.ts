import { Parser } from '../components/parser';
import Program from '../components/parser/program';
import BlockStatement from '../components/parser/statement/blockStatement';
import EmptyStatement from '../components/parser/statement/emptyStatement';
import AdditiveExpression
  from '../components/parser/statement/expression/addititve_expression';
import NumericLiteral
  from '../components/parser/statement/expression/literals/numeric_literal';
import StringLiteral
  from '../components/parser/statement/expression/literals/string_literal';
import MultiplicativeExpression
  from '../components/parser/statement/expression/multiplicative_expression';
import ParanthesizedExpression
  from '../components/parser/statement/expression/paranthesized_expression';
import PrimaryExpression
  from '../components/parser/statement/expression/primary_expression';
import ExpressionStatement
  from '../components/parser/statement/expressionStatement';
import InitStatement from '../components/parser/statement/initStatement';
import StatementList from '../components/parser/statementList';
import TokenExecutor from '../components/parser/tokenExecutor';
import TokenizerImpl from '../components/tokenizer';
import { Tokenizer } from '../components/tokenizer/types';
import { SPEC } from '../constants/bhaiLangSpec';


export default class BhaiLangModule {
 
    private static _tokenizer?: Tokenizer;
    private static _initStatement?: InitStatement  
    private static _parser?: Parser  
    private static _program?: Program  
    private static _statementList?: StatementList  
    private static _tokenExecutor?: TokenExecutor  
    private static _expresionStatement?: ExpressionStatement 
    private static _emptyStatement?: EmptyStatement
    private static _blockStatement?: BlockStatement
    private static _additiveExpression?: AdditiveExpression;
    private static _multiplicativeExpression?: MultiplicativeExpression;
    private static _primaryExpression?: PrimaryExpression;
    private static _paranthesizedExpression?: ParanthesizedExpression;
    private static _numericLiteral?: NumericLiteral;
    private static _stringLiteral?: StringLiteral;
  
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

    static getExpressionStatement() {
        if (!this._expresionStatement) {
            this._expresionStatement = new ExpressionStatement(this.getTokenExecutor());
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
      this._blockStatement = new BlockStatement(this.getTokenExecutor(), this.getStatementList());
    }

    return this._blockStatement;
  }

    static getAdditiveExpression() {
        if (!this._additiveExpression) {
            this._additiveExpression = new AdditiveExpression(this.getTokenExecutor());
        }

        return this._additiveExpression;
    }

    static getMultiplicativeExpression() {
        if (!this._multiplicativeExpression) {
            this._multiplicativeExpression = new MultiplicativeExpression(this.getTokenExecutor() );
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
            this._paranthesizedExpression = new ParanthesizedExpression(this.getTokenExecutor());
        }

        return this._paranthesizedExpression;
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

    static getProgram() {
        if (!this._program)
            this._program = new Program(this.getStatementList());
      
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
