import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import didiLangModule from "../../src/module/didiLangModule";

test("test didiLangModule should success", () => {
  expect(didiLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(didiLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(didiLangModule.getProgram()).toBeInstanceOf(Program);
  expect(didiLangModule.getParser()).toBeInstanceOf(Parser);
});
