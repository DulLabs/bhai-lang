import { RuntimeException } from "../../src";
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


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai
    bhai ye hai a = 0;
    jab tak bhai (a < 10) {
      bol bhai a;
      a += 1;
      agar bhai (a == 6) {
        bas kar bhai;
      }
    }
    bol bhai "done";
    bye bhai
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
    hi bhai
    bhai ye hai a = 0;
    jab tak bhai (a < 10) {
      bol bhai a;
      a += 1;
      agar bhai (a == 6)
        bas kar bhai;
    }
    bol bhai "done";
    bye bhai
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
    hi bhai
    bhai ye hai a = 0;
    jab tak bhai (a < 10) {
      bol bhai a;
      a += 1;
      agar bhai (a == 3) {
        bas kar bhai;
      }
      bol bhai "2 baar hi chapunga";
    }
    bol bhai "done";
    bye bhai
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai
    
    jab tak bhai (sahi) {
      bol bhai "bhai";
    }
    bye bhai;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi bhai
    bhai ye hai x = 6;
    agar bhai (x < 5) {
      bol bhai "x < 5";
    } nahi to bhai (x < 8) {
      bol bhai "x < 8";
    } agar bhai (x < 4) {
      bol bhai "x < 4";
    } warna bhai {
      bol bhai "x > 4";
    }
    bye bhai;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi bhai
//     bhai ye hai a = 0;
//     jab tak bhai (a < 10) {
//       bol bhai a;
//       a += 1;
//       agar bhai (a == 3) {
//         bas kar bhai;
//       }
//       bol bhai "2 baar hi chapunga";
//     }
//     bol bhai "done";
//     bye bhai
//     `);
// });
