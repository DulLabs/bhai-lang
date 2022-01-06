import TokenizerImpl from '../../src/components/tokenizer';
import { SPEC } from '../../src/constants/bhaiLangSpec';

const tokenizer = new TokenizerImpl(SPEC)

test("test Tokenizer.getNextToken", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: "STRING",
    value: '"hello"',
  });
});
