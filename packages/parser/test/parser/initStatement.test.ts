import InitStatement from "../../src/components/parser/statement/initStatement";
import StatementList from "../../src/components/parser/statementList";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import { TokenTypes } from "../../src/constants/bhaiLangSpec";

const tokenExecutorMock = new (<any>(
  TokenExecutor
))() as jest.Mocked<TokenExecutor>;

const statementListMock = new (<any>(
  StatementList
))() as jest.Mocked<StatementList>;

tokenExecutorMock.eatTokenAndForwardLookahead = jest.fn();
tokenExecutorMock.getLookahead = jest.fn();
statementListMock.getStatementList = jest.fn();
statementListMock.getInitialStatementList = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatement of init statement with single level statement should success", () => {
  const hiBhaiToken = {
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  };

  const byeBhaiToken = {
    type: TokenTypes.BYE_BHAI_TYPE,
    value: "bye bhai",
  };

  tokenExecutorMock.eatTokenAndForwardLookahead
    .mockReturnValueOnce(hiBhaiToken)
    .mockReturnValueOnce(byeBhaiToken);

  tokenExecutorMock.getLookahead.mockReturnValueOnce(byeBhaiToken);

  const initStatement = new InitStatement(tokenExecutorMock, statementListMock);

  expect(initStatement.getStatement()).toStrictEqual({
    type: "InitStatement",
    body: [],
  });

  expect(tokenExecutorMock.eatTokenAndForwardLookahead).toHaveBeenCalledTimes(
    2
  );
  expect(tokenExecutorMock.getLookahead).toHaveBeenCalledTimes(1);
  expect(statementListMock.getStatementList).toHaveBeenCalledTimes(0);
  expect(statementListMock.getInitialStatementList).toHaveBeenCalledTimes(0);
});

test("test getStatement of init statement with nested statement list should success", () => {
  const hiBhaiToken = {
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  };

  const byeBhaiToken = {
    type: TokenTypes.BYE_BHAI_TYPE,
    value: "bye bhai",
  };

  statementListMock.getStatementList.mockReturnValueOnce([
    {
      type: "InitStatement",
      body: [],
    },
  ]);

  tokenExecutorMock.eatTokenAndForwardLookahead
    .mockReturnValueOnce(hiBhaiToken)
    .mockReturnValueOnce(byeBhaiToken);

  tokenExecutorMock.getLookahead.mockReturnValueOnce(hiBhaiToken);

  const initStatement = new InitStatement(tokenExecutorMock, statementListMock);

  expect(initStatement.getStatement()).toStrictEqual({
    type: "InitStatement",
    body: [
      {
        type: "InitStatement",
        body: [],
      },
    ],
  });

  expect(tokenExecutorMock.eatTokenAndForwardLookahead).toHaveBeenCalledTimes(
    2
  );
  expect(tokenExecutorMock.getLookahead).toHaveBeenCalledTimes(1);
  expect(statementListMock.getStatementList).toHaveBeenCalledTimes(1);
  expect(statementListMock.getInitialStatementList).toHaveBeenCalledTimes(0);
});

test("test getStatement of init statement with eatTokenAndForwardLookahead throwing exception should throw an exception", () => {
  const hiBhaiToken = {
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  };

  tokenExecutorMock.eatTokenAndForwardLookahead
    .mockReturnValueOnce(hiBhaiToken)
    .mockImplementationOnce(() => {
      throw new SyntaxError();
    });

  tokenExecutorMock.getLookahead.mockReturnValueOnce(null);

  const initStatement = new InitStatement(tokenExecutorMock, statementListMock);

  expect(() => initStatement.getStatement()).toThrow(SyntaxError);

  expect(tokenExecutorMock.eatTokenAndForwardLookahead).toHaveBeenCalledTimes(
    2
  );
  expect(tokenExecutorMock.getLookahead).toHaveBeenCalledTimes(1);
  expect(statementListMock.getStatementList).toHaveBeenCalledTimes(1);
  expect(statementListMock.getInitialStatementList).toHaveBeenCalledTimes(0);
});
