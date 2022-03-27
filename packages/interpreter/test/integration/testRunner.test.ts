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
    interpreter.interpret(`hi didi;
    didi ye hai a = 4;
    {
      didi ye hai a = 90;
      bol didi a;
    }
    bol didi a;
    bye didi;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi didi;
    didi ye hai a = 4;
    {
      a = 90;
      bol didi a;
    }
    bol didi a;
    bye didi;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi didi;
    didi ye hai a = 4;
    {
      bol didi a;
    }
    bol didi a;
    bye didi;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi didi;
    didi ye hai a = 0;
    jab tak didi (a < 2) {
      bol didi "didi";
      a += 1;
    }
    bye didi;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("didi");
  expect(console.log).toHaveBeenCalledWith("didi");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi didi;
    didi ye hai a = 0, b = 0;
    jab tak didi (a < 2) {
      jab tak didi (b < 1) {
        bol didi "didi";
        b += 1;
      }
      a += 1;
    }
    bye didi;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("didi");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi didi;
    didi ye hai a = 0;
    jab tak didi (a < 2) {
      didi ye hai b = 0;
      jab tak didi (b < 2) {
        bol didi "didi";
        b += 1;
        agar didi (b == 1)
          bas kar didi;
      }
      a += 1;
    }
    bye didi;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("didi");
  expect(console.log).toHaveBeenCalledWith("didi");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi didi
    didi ye hai a = 0;
    jab tak didi (a < 10) {
      bol didi a;
      a += 1;
      agar didi (a == 6) {
        bas kar didi;
      }
    }
    bol didi "done";
    bye didi
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
    hi didi
    didi ye hai a = 0;
    jab tak didi (a < 10) {
      bol didi a;
      a += 1;
      agar didi (a == 6)
        bas kar didi;
    }
    bol didi "done";
    bye didi
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
    hi didi
    didi ye hai a = 0;
    jab tak didi (a < 10) {
      bol didi a;
      a += 1;
      agar didi (a == 3) {
        bas kar didi;
      }
      bol didi "2 baar hi chapunga";
    }
    bol didi "done";
    bye didi
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
    hi didi
    
    jab tak didi (sahi) {
      bol didi "didi";
    }
    bye didi;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("didi");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi didi
    didi ye hai x = 6;
    agar didi (x < 5) {
      bol didi "x < 5";
    } nahi to didi (x < 8) {
      bol didi "x < 8";
    } agar didi (x < 4) {
      bol didi "x < 4";
    } warna didi {
      bol didi "x > 4";
    }
    bye didi;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi didi
//     didi ye hai a = 0;
//     jab tak didi (a < 10) {
//       bol didi a;
//       a += 1;
//       agar didi (a == 3) {
//         bas kar didi;
//       }
//       bol didi "2 baar hi chapunga";
//     }
//     bol didi "done";
//     bye didi
//     `);
// });
