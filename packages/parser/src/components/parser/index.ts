import { Tokenizer } from "../tokenizer/types";
import Program from "./program";

export class Parser {

    _tokenizer: Tokenizer;
    _program: Program;

    constructor(tokenizer: Tokenizer, program: Program) {
        this._tokenizer = tokenizer;
        this._program = program;
    }
}