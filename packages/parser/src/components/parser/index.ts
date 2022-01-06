import {
  Token,
  Tokenizer,
} from '../tokenizer/types';
import Program from './program';

export class Parser {
  _tokenizer: Tokenizer;
  _input: string = '';
  _lookahead!: Token;
  _program: Program;

  constructor(tokenizer: Tokenizer, program: Program) {
    this._tokenizer = tokenizer;
    this._program = program;
  }

  parse(input: string) {
    this._input = input;
    this._tokenizer.initTokenizer(input);
    this._lookahead = this._tokenizer.getNextToken();
    return this._program.getProgram();
  }
}
