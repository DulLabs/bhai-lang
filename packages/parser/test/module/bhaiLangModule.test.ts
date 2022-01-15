import BhaiLangModule from "../../src/module/bhaiLangModule";
import Tokenizer from "../../src/components/tokenizer";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import StatementList from "../../src/components/parser/statementList";
import InitStatement from "../../src/components/parser/statement/initStatement";
import Program from "../../src/components/parser/program";
import { Parser } from "../../src/components/parser";

test("test bhaiLangModule should success", () => {
  expect(BhaiLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(BhaiLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(BhaiLangModule.getStatementList()).toBeInstanceOf(StatementList);
  expect(BhaiLangModule.getInitStatement()).toBeInstanceOf(InitStatement);
  expect(BhaiLangModule.getProgram()).toBeInstanceOf(Program);
  expect(BhaiLangModule.getParser()).toBeInstanceOf(Parser);
});
