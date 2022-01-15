import { Parser } from '../components/parser';
import Program from '../components/parser/program';
import AdditiveExpression
  from '../components/parser/statement/expression/addititve_expression';
import MultiplicativeExpression
  from '../components/parser/statement/expression/multiplicative_expression';
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
    private static _additiveExpression?: AdditiveExpression;
    private static _multiplicativeExpression?: MultiplicativeExpression;
    private static _primaryExpression?: PrimaryExpression;

    static getTokenizer() {
        if (!this._tokenizer)
            this._tokenizer = new TokenizerImpl(SPEC);

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
            this._initStatement = new InitStatement(this.getTokenExecutor(), this.getStatementList());

        return this._initStatement;
    }

    static getExpressionStatement() {
        if (!this._expresionStatement) {
            this._expresionStatement = new ExpressionStatement(this.getTokenExecutor());
        }

        return this._expresionStatement;
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

    static getProgram() {
        if (!this._program)
            this._program = new Program(this.getStatementList());

        return this._program;
    }

    static getParser() {
        if (!this._parser)
            this._parser = new Parser(this.getTokenizer(), this.getProgram(), 
            this.getTokenExecutor());

        return this._parser;
    }

}
