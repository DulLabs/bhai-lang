import TokenizerImpl from "../../src/components/tokenizer";
import { SPEC, TokenTypes } from "../../src/constants/didiLangSpec";
import InvalidStateException from "../../src/exceptions/invalidStateException";

const tokenizer = new TokenizerImpl(SPEC);

test("test Tokenizer.getNextToken with HI_didi_TYPE should success", () => {
  tokenizer.initTokenizer(`hi didi`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.HI_didi_TYPE,
    value: "hi didi",
  });
});

test("test Tokenizer.getNextToken with BYE_didi_TYPE should success", () => {
  tokenizer.initTokenizer(`bye didi`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.BYE_didi_TYPE,
    value: "bye didi",
  });
});

test("test Tokenizer.getNextToken with STRING_TYPE should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.STRING_TYPE,
    value: `"hello"`,
  });
});

test("test Tokenizer.getNextToken with empty string should success", () => {
  tokenizer.initTokenizer(` `);

  expect(tokenizer.getNextToken()).toStrictEqual(null);
});

test("test Tokenizer.getNextToken without initTokenizer should throw an exception", () => {
  tokenizer.initTokenizer(``);

  expect(() => tokenizer.getNextToken()).toThrow(InvalidStateException);
});

test("test Tokenizer.getNextToken with un excepted string should throw an exception", () => {
  tokenizer.initTokenizer(`~~~`);

  expect(() => tokenizer.getNextToken()).toThrow(SyntaxError);
});

test("test Tokenizer.initTokenizer with normal string should success", () => {
  expect(() => tokenizer.initTokenizer(`"hello"`)).not.toThrowError();
});

test("test Tokenizer.isEOF with normal string should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.isEOF()).toStrictEqual(false);
});

test("test Tokenizer.isEOF without initTokenizer should success", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.isEOF()).toStrictEqual(true);
});

test("test Tokenizer.hasMoreTokens with normal string  should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(true);
});

test("test Tokenizer.hasMoreTokens without initTokenizer should success", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(false);
});
