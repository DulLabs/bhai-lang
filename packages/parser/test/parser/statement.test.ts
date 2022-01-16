import Statement from "../../src/components/parser/statement";
import InitStatement from "../../src/components/parser/statement/initStatement";
import { TokenTypes } from "../../src/constants/bhaiLangSpec";
import BhaiLangModule from "../../src/module/bhaiLangModule";

jest.mock("../../src/module/bhaiLangModule");

const initStatementMock = new (<any>(
  InitStatement
))() as jest.Mocked<InitStatement>;

afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatementImpl of statement class with should success", () => {
  const lookahead = {
    type: TokenTypes.HI_BHAI_TYPE,
    value: "hi bhai",
  };

  BhaiLangModule.getInitStatement = jest
    .fn()
    .mockReturnValue(initStatementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    initStatementMock
  );

  expect(BhaiLangModule.getInitStatement).toHaveBeenCalledTimes(1);
});
