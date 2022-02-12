import NallaPointerException from "../../src/exceptions/nallaPointerException";
import bhaiLangModule from "../../src/module/bhaiLangModule";

import {
  NegativeExpressionsTests,
  NegativeStatementTests
} from "./negativeTestsHelper";
import { ExpressionsTests, StatementTests } from "./positiveTestsHelper";


type posTestObjType = typeof StatementTests[0];

type negTestObjType = {
  name: string,
  input: string,
  output: SyntaxErrorConstructor | typeof NallaPointerException
};

StatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

ExpressionsTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

NegativeStatementTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

NegativeExpressionsTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

function _runPositiveTests(testCase: posTestObjType) {
  test(testCase.name, () => {
    const parser = bhaiLangModule.getParser();
    const ast = parser.parse(testCase.input);
    expect(JSON.stringify(ast)).toBe(testCase.output);
  });
}

function _runNegativeTests(testCase: negTestObjType) {
  test(testCase.name, () => {
    const parser = bhaiLangModule.getParser();
    expect(() => parser.parse(testCase.input)).toThrow(testCase.output);
  });
}

// test("jest test", () => {
//   const parser = bhaiLangModule.getParser();
//   console.debug(JSON.stringify(parser.parse(`hi bhai
//   bol bhai nalla + 5;
//   bye bhai;`)));
// })