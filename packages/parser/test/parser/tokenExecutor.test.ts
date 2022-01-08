import TokenExecutor from '../../src/components/parser/tokenExecutor';
import { TokenTypes } from '../../src/constants/bhaiLangSpec';

const getNextTokenMock = jest.fn().mockImplementation(() => {
    return null;
});

jest.mock("../../src/components/tokenizer", () => {
    return {
        Tokenizer: jest.fn().mockImplementation(() => {
            return {
                getNextToken: getNextTokenMock
            }
        })
    };
});

test("test eatTokenAndForwardLookahead", () => {

    const lookahead = {
        type: TokenTypes.HI_BHAI_TYPE,
      value: "hi bhai",
    }

    //@ts-ignore
    const tokenExecutor = new TokenExecutor();

    tokenExecutor.setLookahead(lookahead);

    expect(tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE)).toStrictEqual({
        type: "",
        value: ""
    });
  });