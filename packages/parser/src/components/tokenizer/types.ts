export interface Tokenizer {
  initTokenizer(stringToTokenize: String): void;

  isEOF(): boolean;

  hasMoreTokens(): boolean;

  getNextToken(): Token | null;
}

export type Token = {
  type: string;

  value: string;
} | null
