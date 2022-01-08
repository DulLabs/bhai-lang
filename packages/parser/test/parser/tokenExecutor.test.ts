import TokenExecutor from '../../src/components/parser/tokenExecutor';
import { Tokenizer } from '../../src/components/tokenizer/types';
import { TokenTypes } from '../../src/constants/bhaiLangSpec';


const mockGetNextToken = jest.fn().mockImplementation(() => {
    return null;
});

const tokenizer: jest.Mocked<Tokenizer> = {
    getNextToken: mockGetNextToken,
    initTokenizer: jest.fn(),
    isEOF: jest.fn(),
    hasMoreTokens: jest.fn(),
}


test("test eatTokenAndForwardLookahead", () => {

    const lookahead = {
        type: TokenTypes.HI_BHAI_TYPE,
      value: "hi bhai",
    }

    const tokenExecutor = new TokenExecutor(tokenizer);

    tokenExecutor.setLookahead(lookahead);

    expect(tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)).toStrictEqual({
        type: TokenTypes.HI_BHAI_TYPE,
        value: "hi bhai"
    });
  });
