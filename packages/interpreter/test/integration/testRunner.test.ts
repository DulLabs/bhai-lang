import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      bhai ye hai a = 90;
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      a = 90;
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai;
    bhai ye hai a = 0;
    jab tak bhai (a < 2) {
      bol bhai "bhai";
      a += 1;
    }
    bye bhai;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai;
    bhai ye hai a = 0, b = 0;
    jab tak bhai (a < 2) {
      jab tak bhai (b < 1) {
        bol bhai "bhai";
        b += 1;
      }
      a += 1;
    }
    bye bhai;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai;
    bhai ye hai a = 0;
    jab tak bhai (a < 2) {
      bhai ye hai b = 0;
      jab tak bhai (b < 2) {
        bol bhai "bhai";
        b += 1;
        agar bhai (b == 1)
          bas kar bhai;
      }
      a += 1;
    }
    bye bhai;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi bhai;
//       bhai ye hai a = 0;
//       jab tak bhai (a < 2) {
//         jab tak bhai (sahi)
//           bas kar bhai;
//         bol bhai "hello";
//         agar bhai (sahi)
//           bas kar bhai;
//       }
//       bye bhai;
//     bye bhai;
//     `);
// });
