import { Parser } from "../components/parser";
import Program from "../components/parser/program";
import InitStatement from "../components/parser/statement/initStatement";
import StatementList from "../components/parser/statementList";
import TokenExecutor from "../components/parser/tokenExecutor";
import TokenizerImpl from "../components/tokenizer";
import { Tokenizer } from "../components/tokenizer/types";
import { SPEC } from "../constants/bhaiLangSpec";

export default class BhaiLangModule {

    private static _tokenizer: Tokenizer | undefined = undefined;
    private static _initStatement: InitStatement | undefined = undefined;
    private static _parser: Parser | undefined = undefined;
    private static _program: Program | undefined = undefined;
    private static _statementList: StatementList | undefined = undefined;
    private static _tokenExecutor: TokenExecutor | undefined = undefined;

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