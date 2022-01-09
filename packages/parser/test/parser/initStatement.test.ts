import InitStatement from '../../src/components/parser/statement/initStatement';
import StatementList from '../../src/components/parser/statementList';
import TokenExecutor from '../../src/components/parser/tokenExecutor';
import { TokenTypes } from '../../src/constants/bhaiLangSpec';


const tokenExecutorMock = new (<any>TokenExecutor)() as jest.Mocked<TokenExecutor>;

const statementListMock = new (<any>StatementList)() as jest.Mocked<StatementList>;

tokenExecutorMock.eatTokenAndForwardLookahead = jest.fn();
tokenExecutorMock.getLookahead = jest.fn();

test("test init statement", () => {

    const hiBhaiToken = {
        type: TokenTypes.HI_BHAI_TYPE,
        value: "hi bhai"
    }

    const byeBhaiToken = {
        type: TokenTypes.BYE_BHAI_TYPE,
        value: "bye bhai"
    }

    tokenExecutorMock.eatTokenAndForwardLookahead.mockReturnValueOnce(hiBhaiToken).mockReturnValueOnce(byeBhaiToken);

    tokenExecutorMock.getLookahead.mockReturnValueOnce(byeBhaiToken);

    const initStatement = new InitStatement(tokenExecutorMock, statementListMock);

    expect(initStatement.getStatement()).toStrictEqual({
        type: 'InitStatement',
        body: []
    });
  });