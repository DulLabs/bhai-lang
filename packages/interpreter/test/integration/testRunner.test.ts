import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

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
        expect(() => interpreter.interpret(testCase.input)).toThrowError(testCase.exception);
    });
});

test("test redeclaring & printing variables in different scopes", () => {
    expect(() => interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      bhai ye hai a = 90;
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("90");
    expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
    expect(() => interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      a = 90;
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("90");
    expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
    expect(() => interpreter.interpret(`hi bhai;
    bhai ye hai a = 4;
    {
      bol bhai a;
    }
    bol bhai a;
    bye bhai;`)).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("4");
    expect(console.log).toHaveBeenCalledWith("4");
});
