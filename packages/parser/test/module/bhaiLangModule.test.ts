import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import BhaiLangModule from "../../src/module/bhaiLangModule";

test("test bhaiLangModule should success", () => {
  expect(BhaiLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(BhaiLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(BhaiLangModule.getProgram()).toBeInstanceOf(Program);
  expect(BhaiLangModule.getParser()).toBeInstanceOf(Parser);
});
