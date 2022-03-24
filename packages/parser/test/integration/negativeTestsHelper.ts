export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only வணக்கம் நண்பா, should throw an exception",
    input: `
        வணக்கம் நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "only நன்றி நண்பா, should throw an exception",
    input: `
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "multiple வணக்கம் நண்பா, should throw an exception",
    input: `
        வணக்கம் நண்பா
        வணக்கம் நண்பா
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        வணக்கம் நண்பா
        வணக்கம் நண்பா
        நன்றி நண்பா
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        வணக்கம் நண்பா
        {
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        வணக்கம் நண்பா
        }
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        வணக்கம் நண்பா
        {
          naam = 4
        }
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா ;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா 478
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா sahi galat;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா ~!*;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a b c;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a 
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா ;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        வணக்கம் நண்பா
        a = 4
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        வணக்கம் நண்பா
        a *=- 4;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        வணக்கம் நண்பா
        "hello" = 4;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        வணக்கம் நண்பா
        5 = 890;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (a + 4;
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        வணக்கம் நண்பா
        a + 4);
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (a * (4 + 8 + 10);
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா a = b && ;
    நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா a = && b;
    நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (&&);
    நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        வணக்கம் நண்பா
        அப்படி இல்லேன்னா {

        }
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        வணக்கம் நண்பா
       இப்படின்னா நண்பா {

       }
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இல்ல ஒருவேளை (sahi) {
        }
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இல்ல ஒருவேளை (sahi) {
        } இல்ல ஒருவேளை (sahi) {
        }
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi) {

        } இல்ல ஒருவேளை (sahi)
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi) {

        } இல்ல ஒருவேளை (sahi) {

        } இல்ல ஒருவேளை (sahi)
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi) {

        } இல்ல ஒருவேளை
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi) {

        } இல்ல ஒருவேளை (sahi) {

        } இல்ல ஒருவேளை
        நன்றி நண்பா;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        வணக்கம் நண்பா
          அடுத்தது நண்பா
        நன்றி நண்பா
      `,
    output: SyntaxError,
  },
]