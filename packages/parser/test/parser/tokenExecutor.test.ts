import TokenExecutor from '../../src/components/parser/tokenExecutor';
import TokenizerImpl from '../../src/components/tokenizer';
import { TokenTypes } from '../../src/constants/bhaiLangSpec';

const tokenizerMock = new (<any>TokenizerImpl)() as  jest.Mocked<TokenizerImpl>

tokenizerMock.getNextToken = jest.fn();

test("test eatTokenAndForwardLookahead", () => {

    const lookahead = {
        type: TokenTypes.HI_BHAI_TYPE,
      value: "hi bhai",
    }

    tokenizerMock.getNextToken.mockReturnValueOnce(null);

    const tokenExecutor = new TokenExecutor(tokenizerMock);

    tokenExecutor.setLookahead(lookahead);

    expect(tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)).toStrictEqual({
        type: TokenTypes.HI_BHAI_TYPE,
        value: "hi bhai"
    });
  });
