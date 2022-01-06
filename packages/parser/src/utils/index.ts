import { Token } from '../components/tokenizer/types';

/**
 * This method is used to consume the token, and return the next token.
 * */
export function eatToken(type: string | null, lookahead: Token, getNextToken: () => Token) {
  const token = lookahead;
  if (token === null) {
    throw new SyntaxError(`Unexpected end of input, expected: ${type}`);
  }

  if (token.type !== type) {
    throw new SyntaxError(`Unexpected input ${token.type}, expected: ${type}`);
  }

  lookahead = getNextToken();

  return token;
}
