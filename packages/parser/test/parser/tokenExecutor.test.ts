import TokenExecutor from "../../src/components/parser/tokenExecutor";
import TokenizerImpl from "../../src/components/tokenizer";
import { TokenTypes } from "../../src/constants/bhaiLangSpec";

const tokenizerMock = new (<any>TokenizerImpl)() as jest.Mocked<TokenizerImpl>;

tokenizerMock.getNextToken = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("test eatTokenAndForwardLookahead success", () => {
  const lookahead = {
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  };

  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)
  ).toStrictEqual({
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  });

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(1);
});

test("test eatTokenAndForwardLookahead with null lookahead should throw exception", () => {
  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(null);

  expect(() =>
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)
  ).toThrow(SyntaxError);

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(0);
});

test("test eatTokenAndForwardLookahead with token not matching the expected token type lookahead should throw exception", () => {
  const lookahead = {
    type: TokenTypes.BYE_BHAI_TYPE,
    value: "bye bhai",
  };

  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(() =>
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)
  ).toThrow(SyntaxError);

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(0);
});

test("test getLookahead success", () => {
  const lookahead = {
    type: TokenTypes.BYE_BHAI_TYPE,
    value: "bye bhai",
  };

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(tokenExecutor.getLookahead()).toStrictEqual(lookahead);
});
