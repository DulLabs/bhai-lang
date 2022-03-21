import { RuntimeException } from "../../src";
import InvalidStateException from "../../src/exceptions/invalidStateException";
import {BooleanObject, DataObject, NullObject, NumericObject, StringObject} from "../../src/components/dataClass";
import {
  checkNumberOperands,
  checkStringOperands,
  getOperationValue
} from "../../src/helpers";


const testCaseProvider = [
  // checkNumberOperands tests
  {
    name: "test checkNumberOperands with number oprands, should return true",
    input: {
      left: new NumericObject(45),
      right: new NumericObject(67),
    },
    output: true,
    function: checkNumberOperands,
  },
  {
    name: "test checkNumberOperands without number oprands, should return false",
    input: {
      left: new StringObject("hello"),
      right: new StringObject("67"),
    },
    output: false,
    function: checkNumberOperands,
  },
  {
    name: "test checkNumberOperands with one number oprand and one non-number operand, should return false",
    input: {
      left: new NumericObject(90),
      right: new StringObject("67"),
    },
    output: false,
    function: checkNumberOperands,
  },
  {
    name: "test checkNumberOperands with one number oprand and one non-number operand - 2, should return false",
    input: {
      left: new StringObject("67"),
      right: new NumericObject(5678),
    },
    output: false,
    function: checkNumberOperands,
  },
  // checkStringOperands tests
  {
    name: "test checkStringOperands with string oprands, should return true",
    input: {
      left: new StringObject("45"),
      right: new StringObject("asdasdas"),
    },
    output: true,
    function: checkStringOperands,
  },
  {
    name: "test checkStringOperands without string oprands, should return false",
    input: {
      left: new NumericObject(23432),
      right: new NullObject(),
    },
    output: false,
    function: checkStringOperands,
  },
  {
    name: "test checkStringOperands with one string oprand and one non-string operand, should return false",
    input: {
      left: new NumericObject(90),
      right: new StringObject("67"),
    },
    output: false,
    function: checkStringOperands,
  },
  {
    name: "test checkStringOperands with one number string and one non-string operand - 2, should return false",
    input: {
      left: new StringObject("67"),
      right: new NumericObject(5678),
    },
    output: false,
    function: checkStringOperands,
  },
];

const getOperationValuePosTestCasesProvider:{
  name: string,
    input1: {
      left: DataObject,
      right: DataObject,
    },
    input2: string,
    output: DataObject,
    function: Function,
}[] = [
  // getOperationValue tests
  {
    name: `test getOperationValue "=" operator with string oprands, should return value of right operand - number`,
    input1: {
      left: new NumericObject(23432),
      right: new NumericObject(890),
    },
    input2: "=",
    output: new NumericObject(890),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "=" operator with string oprands, should return value of right operand - null`,
    input1: {
      left: new NumericObject(23432),
      right: new NullObject(),
    },
    input2: "=",
    output: new NullObject(),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "=" operator with string oprands, should return value of right operand - string`,
    input1: {
      left: new NumericObject(23432),
      right: new StringObject("hello"),
    },
    input2: "=",
    output: new StringObject("hello"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with string oprands, should success`,
    input1: {
      left: new StringObject("hello"),
      right: new StringObject("crap"),
    },
    input2: "+",
    output: new StringObject("hellocrap"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(2),
      right: new NumericObject(3),
    },
    input2: "+",
    output: new NumericObject(5),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with one number and one string oprands, should success`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "+",
    output: new StringObject("15hello"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with second operand number and first string, should success`,
    input1: {
      left: new StringObject("hello"),
      right: new NumericObject(15),
    },
    input2: "+",
    output: new StringObject("hello15"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with one very large number and one string oprands, should success`,
    input1: {
      left: new NumericObject(15378247823432),
      right: new StringObject("hello"),
    },
    input2: "+",
    output: new StringObject("15378247823432hello"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(2),
      right: new NumericObject(3),
    },
    input2: "+=",
    output: new NumericObject(5),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with string oprands, should success`,
    input1: {
      left: new StringObject("hello"),
      right: new StringObject("crap"),
    },
    input2: "+=",
    output: new StringObject("hellocrap"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with one number and one string oprands, should success`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "+=",
    output: new StringObject("15hello"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with second operand number and first string, should success`,
    input1: {
      left: new StringObject("hello"),
      right: new NumericObject(15),
    },
    input2: "+=",
    output: new StringObject("hello15"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with one very large number and one string oprands, should success`,
    input1: {
      left: new NumericObject(15378247823432),
      right: new StringObject("hello"),
    },
    input2: "+",
    output: new StringObject("15378247823432hello"),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "-" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "-",
    output: new NumericObject(2),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "-=" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "-=",
    output: new NumericObject(2),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "*=" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "*=",
    output: new NumericObject(15),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "*" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "*",
    output: new NumericObject(15),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/=" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(15),
      right: new NumericObject(3),
    },
    input2: "/=",
    output: new NumericObject(5),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(15),
      right: new NumericObject(3),
    },
    input2: "/",
    output: new NumericObject(5),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "==" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: "==",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "==" operator with number oprands unequal, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "==",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "==" operator with string oprands, should success`,
    input1: {
      left: new StringObject("hell"),
      right: new StringObject("hell"),
    },
    input2: "==",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "==" operator with string oprands unequal, should success`,
    input1: {
      left: new StringObject("crap"),
      right: new StringObject("hell"),
    },
    input2: "==",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "==" operator with one string & one number, should success`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: "==",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  // !=
  {
    name: `test getOperationValue "!=" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: "!=",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "!=" operator with number oprands unequal, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "!=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "!=" operator with string oprands, should success`,
    input1: {
      left: new StringObject("hell"),
      right: new StringObject("hell"),
    },
    input2: "!=",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "!=" operator with string oprands unequal, should success`,
    input1: {
      left: new StringObject("crap"),
      right: new StringObject("hell"),
    },
    input2: "!=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "!=" operator with one string & one number, should success`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: "!=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  // >
  {
    name: `test getOperationValue ">" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: ">",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">" operator with number oprands left greater, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: ">",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  // <
  {
    name: `test getOperationValue "<" operator with number oprands, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: "<",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<" operator with number oprands left smaller, should success`,
    input1: {
      left: new NumericObject(1),
      right: new NumericObject(3),
    },
    input2: "<",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  // >=
  {
    name: `test getOperationValue ">=" operator with number oprands equal, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: ">=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">=" operator with number oprands left greater, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: ">=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">=" operator with number oprands left smaller, should success`,
    input1: {
      left: new NumericObject(1),
      right: new NumericObject(3),
    },
    input2: ">=",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  // <=
  {
    name: `test getOperationValue "<=" operator with number oprands equal, should success`,
    input1: {
      left: new NumericObject(3),
      right: new NumericObject(3),
    },
    input2: "<=",
    output: new BooleanObject(true),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<=" operator with number oprands left greater, should success`,
    input1: {
      left: new NumericObject(5),
      right: new NumericObject(3),
    },
    input2: "<=",
    output: new BooleanObject(false),
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<=" operator with number oprands left smaller, should success`,
    input1: {
      left: new NumericObject(1),
      right: new NumericObject(3),
    },
    input2: "<=",
    output: new BooleanObject(true),
    function: getOperationValue,
  }
];

const getOperationValueNegTestCasesProvider:{
  name: string,
    input1: {
      left: DataObject,
      right: DataObject,
    },
    input2: string,
    function: Function,
    exception: any,
}[] = [
  {
    name: `test getOperationValue "+" operator with one boolean and one string oprands, should throw an exception`,
    input1: {
      left: new BooleanObject(true),
      right: new StringObject("hello"),
    },
    input2: "+",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+" operator with second operand boolean and first string, should throw an exception`,
    input1: {
      left: new StringObject("true"),
      right: new BooleanObject(false),
    },
    input2: "+",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with one boolean and one string oprands, should throw an exception`,
    input1: {
      left: new BooleanObject(true),
      right: new StringObject("hello"),
    },
    input2: "+=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "+=" operator with second operand boolean and first string, should throw an exception`,
    input1: {
      left: new StringObject("true"),
      right: new BooleanObject(false),
    },
    input2: "+=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "-" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "-",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "-=" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "-=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "-=" operator with both strings oprands, should throw an exception`,
    input1: {
      left: new StringObject("15"),
      right: new StringObject("hello"),
    },
    input2: "-=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "*" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "*",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "*=" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "*=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "/",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/=" operator with one number and one string oprands, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hello"),
    },
    input2: "/=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/" operator with zero divisor, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new NumericObject(0),
    },
    input2: "/",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "/=" operator with zero divisor, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new NumericObject(0),
    },
    input2: "/",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "#" operator, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new NumericObject(5),
    },
    input2: "#",
    exception: InvalidStateException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">" operator with one string & one number, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: ">",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">" operator with both string , should throw an exception`,
    input1: {
      left: new StringObject("cap"),
      right: new StringObject("hell"),
    },
    input2: ">",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<" operator with one string & one number, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: "<",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<" operator with both string , should throw an exception`,
    input1: {
      left: new StringObject("cap"),
      right: new StringObject("hell"),
    },
    input2: "<",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">=" operator with one string & one number, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: ">=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue ">=" operator with both string , should throw an exception`,
    input1: {
      left: new StringObject("cap"),
      right: new StringObject("hell"),
    },
    input2: ">=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<=" operator with one string & one number, should throw an exception`,
    input1: {
      left: new NumericObject(15),
      right: new StringObject("hell"),
    },
    input2: "<=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "<=" operator with both string , should throw an exception`,
    input1: {
      left: new StringObject("cap"),
      right: new StringObject("hell"),
    },
    input2: "<=",
    exception: RuntimeException,
    function: getOperationValue,
  },
  {
    name: `test getOperationValue "**" operator with unsupported operator , should throw an exception`,
    input1: {
      left: new StringObject("cap"),
      right: new StringObject("hell"),
    },
    input2: "**",
    exception: InvalidStateException,
    function: getOperationValue,
  },
];

testCaseProvider.forEach((testCase) => {
  test(testCase.name, () => {
    expect(testCase.function(testCase.input)).toStrictEqual(testCase.output);
  });
});

getOperationValuePosTestCasesProvider.forEach((testCase) => {
  test(testCase.name, () => {
    expect(testCase.function(testCase.input1, testCase.input2)).toStrictEqual(
      testCase.output
    );
  });
});

getOperationValueNegTestCasesProvider.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => testCase.function(testCase.input1, testCase.input2)).toThrow(
      testCase.exception
    );
  });
});
