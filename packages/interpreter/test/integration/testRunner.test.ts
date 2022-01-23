import Interpreter from "../../src/components/interpreter";
import Scope from "../../src/components/scope";
import InterpreterModule from "../../src/module/interpreterModule";

import { NoOutputPositiveTests } from "./positiveTestsHelper";


type noOutputPosTestObjType = typeof NoOutputPositiveTests[0];

let interpreter: Interpreter;

beforeEach(() => {
    InterpreterModule.setCurrentScope(new Scope(null));

    interpreter = InterpreterModule.getInterpreter();
});

NoOutputPositiveTests.forEach((testCase) => {
    _runNoOutputPositiveTests(testCase);
});

function _runNoOutputPositiveTests(testCase: noOutputPosTestObjType) {
    test(testCase.name, () => {
        expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
    });
}