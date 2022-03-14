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
    interpreter.interpret(`hello dost;
    dost ye hai a = 4;
    {
      dost ye hai a = 90;
      bolo dost a;
    }
    bolo dost a;
    bye dost;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hello dost;
    dost ye hai a = 4;
    {
      a = 90;
      bolo dost a;
    }
    bolo dost a;
    bye dost;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hello dost;
    dost ye hai a = 4;
    {
      bolo dost a;
    }
    bolo dost a;
    bye dost;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost;
    dost ye hai a = 0;
    jab tak dost (a < 2) {
      bolo dost "bhai";
      a += 1;
    }
    bye dost;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost;
    dost ye hai a = 0, b = 0;
    jab tak dost (a < 2) {
      jab tak dost (b < 1) {
        bolo dost "bhai";
        b += 1;
      }
      a += 1;
    }
    bye dost;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost;
    dost ye hai a = 0;
    jab tak dost (a < 2) {
      dost ye hai b = 0;
      jab tak dost (b < 2) {
        bolo dost "bhai";
        b += 1;
        agar dost (b == 1)
          bas karo dost;
      }
      a += 1;
    }
    bye dost;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost
    dost ye hai a = 0;
    jab tak dost (a < 10) {
      bolo dost a;
      a += 1;
      agar dost (a == 6) {
        bas karo dost;
      }
    }
    bolo dost "done";
    bye dost
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost
    dost ye hai a = 0;
    jab tak dost (a < 10) {
      bolo dost a;
      a += 1;
      agar dost (a == 6)
        bas karo dost;
    }
    bolo dost "done";
    bye dost
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hello dost
    dost ye hai a = 0;
    jab tak dost (a < 10) {
      bolo dost a;
      a += 1;
      agar dost (a == 3) {
        bas karo dost;
      }
      bolo dost "2 baar hi chapunga";
    }
    bolo dost "done";
    bye dost
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hello dost
//     dost ye hai a = 0;
//     jab tak dost (a < 10) {
//       bolo dost a;
//       a += 1;
//       agar dost (a == 3) {
//         bas karo dost;
//       }
//       bolo dost "2 baar hi chapunga";
//     }
//     bolo dost "done";
//     bye dost
//     `);
// });
