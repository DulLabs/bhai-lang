import Statement from "../../src/components/parser/statement";
import BlockStatement from "../../src/components/parser/statement/blockStatement";
import FunctionStatement from "../../src/components/parser/statement/functionStatement";
import { TokenTypes } from "../../src/constants/bhaiLangSpec";
import BhaiLangModule from "../../src/module/bhaiLangModule";

jest.mock("../../src/module/bhaiLangModule");



afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatementImpl of statement class with should success", () => {
  const statementMock = new (<any>(
    BlockStatement
  ))() as jest.Mocked<BlockStatement>;
  const lookahead = {
    type: TokenTypes.OPEN_CURLY_BRACE_TYPE,
    value: "{",
  };

  BhaiLangModule.getBlockStatement = jest
    .fn()
    .mockReturnValue(statementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    statementMock
  );

  expect(BhaiLangModule.getBlockStatement).toHaveBeenCalledTimes(1);
});

test("test getStatementImpl of function declaration statement should success", () => {
  const statementMock = new (<any>(
    FunctionStatement
  ))() as jest.Mocked<FunctionStatement>;
  const lookahead = {
    type: TokenTypes.FUNDA_TYPE,
    value: `apna funda testing(a,b){
      bol bhai a;
    }`,
  };

  BhaiLangModule.getFunctionStatement = jest
    .fn()
    .mockReturnValue(statementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    statementMock
  );

  expect(BhaiLangModule.getFunctionStatement).toHaveBeenCalledTimes(1);
});

