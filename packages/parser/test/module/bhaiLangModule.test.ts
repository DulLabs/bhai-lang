import { Parser } from '../../src/components/parser';
import Program from '../../src/components/parser/program';
import InitStatement from '../../src/components/parser/statement/initStatement';
import StatementList from '../../src/components/parser/statementList';
import TokenExecutor from '../../src/components/parser/tokenExecutor';
import Tokenizer from '../../src/components/tokenizer';
import BhaiLangModule from '../../src/module/bhaiLangModule';


test("test bhaiLangModule should success", () => {
  expect(BhaiLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(BhaiLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(BhaiLangModule.getStatementList()).toBeInstanceOf(StatementList);
  expect(BhaiLangModule.getInitStatement()).toBeInstanceOf(InitStatement);
  expect(BhaiLangModule.getProgram()).toBeInstanceOf(Program);
  expect(BhaiLangModule.getParser()).toBeInstanceOf(Parser);
});
