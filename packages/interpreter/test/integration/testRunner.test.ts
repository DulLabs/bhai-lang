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
    interpreter.interpret(`வணக்கம் நண்பா;
    இதான் நண்பா a = 4;
    {
      இதான் நண்பா a = 90;
      சொல்லு நண்பா a;
    }
    சொல்லு நண்பா a;
    நன்றி நண்பா;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`வணக்கம் நண்பா;
    இதான் நண்பா a = 4;
    {
      a = 90;
      சொல்லு நண்பா a;
    }
    சொல்லு நண்பா a;
    நன்றி நண்பா;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`வணக்கம் நண்பா;
    இதான் நண்பா a = 4;
    {
      சொல்லு நண்பா a;
    }
    சொல்லு நண்பா a;
    நன்றி நண்பா;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    வணக்கம் நண்பா;
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 2) {
      சொல்லு நண்பா "bhai";
      a += 1;
    }
    நன்றி நண்பா;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    வணக்கம் நண்பா;
    இதான் நண்பா a = 0, b = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 2) {
      இதுவரைக்கும் சுத்து நண்பா (b < 1) {
        சொல்லு நண்பா "bhai";
        b += 1;
      }
      a += 1;
    }
    நன்றி நண்பா;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    வணக்கம் நண்பா;
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 2) {
      இதான் நண்பா b = 0;
      இதுவரைக்கும் சுத்து நண்பா (b < 2) {
        சொல்லு நண்பா "bhai";
        b += 1;
        இப்படின்னா நண்பா (b == 1)
          போதும் நண்பா;
      }
      a += 1;
    }
    நன்றி நண்பா;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    வணக்கம் நண்பா
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 10) {
      சொல்லு நண்பா a;
      a += 1;
      இப்படின்னா நண்பா (a == 6) {
        போதும் நண்பா;
      }
    }
    சொல்லு நண்பா "done";
    நன்றி நண்பா
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
    வணக்கம் நண்பா
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 10) {
      சொல்லு நண்பா a;
      a += 1;
      இப்படின்னா நண்பா (a == 6)
        போதும் நண்பா;
    }
    சொல்லு நண்பா "done";
    நன்றி நண்பா
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
    வணக்கம் நண்பா
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 10) {
      சொல்லு நண்பா a;
      a += 1;
      இப்படின்னா நண்பா (a == 3) {
        போதும் நண்பா;
      }
      சொல்லு நண்பா "2 baar hi chapunga";
    }
    சொல்லு நண்பா "done";
    நன்றி நண்பா
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
    வணக்கம் நண்பா
    
    இதுவரைக்கும் சுத்து நண்பா (sahi) {
      சொல்லு நண்பா "bhai";
    }
    நன்றி நண்பா;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    வணக்கம் நண்பா
    இதான் நண்பா x = 6;
    இப்படின்னா நண்பா (x < 5) {
      சொல்லு நண்பா "x < 5";
    } இல்ல ஒருவேளை (x < 8) {
      சொல்லு நண்பா "x < 8";
    } இப்படின்னா நண்பா (x < 4) {
      சொல்லு நண்பா "x < 4";
    } அப்படி இல்லேன்னா {
      சொல்லு நண்பா "x > 4";
    }
    நன்றி நண்பா;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     வணக்கம் நண்பா
//     இதான் நண்பா a = 0;
//     இதுவரைக்கும் சுத்து நண்பா (a < 10) {
//       சொல்லு நண்பா a;
//       a += 1;
//       இப்படின்னா நண்பா (a == 3) {
//         போதும் நண்பா;
//       }
//       சொல்லு நண்பா "2 baar hi chapunga";
//     }
//     சொல்லு நண்பா "done";
//     நன்றி நண்பா
//     `);
// });
