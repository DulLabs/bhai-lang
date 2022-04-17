export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only hi bhai, should throw an exception",
    input: `
        hi bhai
      `,
    output: SyntaxError,
  },
  {
    name: "only bye bhai, should throw an exception",
    input: `
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "multiple hi bhai, should throw an exception",
    input: `
        hi bhai
        hi bhai
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        hi bhai
        hi bhai
        bye bhai
        bye bhai
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        hi bhai
        {
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        hi bhai
        }
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        hi bhai
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        hi bhai
        {
          naam = 4
        }
        bye bhai
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        hi bhai
        bol bhai ;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        hi bhai
        bol bhai 478
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        hi bhai
        bol bhai sahi galat;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        hi bhai
        bol bhai ~!*;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        hi bhai
        bol bhai a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a b c;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a 
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        hi bhai
        bhai ye hai ;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        hi bhai
        bhai ye hai
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    hi bhai
    jab tak bhai (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        hi bhai
        a = 4
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        hi bhai
        a *=- 4;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        hi bhai
        "hello" = 4;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        hi bhai
        5 = 890;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        hi bhai
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        hi bhai
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        hi bhai
        (a + 4;
        bye bhai
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        hi bhai
        a + 4);
        bye bhai
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        hi bhai
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        hi bhai
        (a * (4 + 8 + 10);
        bye bhai
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    hi bhai
    bhai ye hai a = b && ;
    bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    hi bhai
    bhai ye hai a = && b;
    bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    hi bhai
    agar bhai (&&);
    bye bhai;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    hi bhai
    bhai ye hai a = 1..2;
    bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    hi bhai
    bhai ye hai a = ..2;
    bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    hi bhai
    bhai ye hai a = 1.2.3;
    bye bhai;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        hi bhai
        agar bhai (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        hi bhai
        warna bhai {

        }
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        hi bhai
       agar bhai {

       }
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        hi bhai
        nahi to bhai (sahi) {
        }
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        hi bhai
        nahi to bhai (sahi) {
        } nahi to bhai (sahi) {
        }
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        hi bhai
        agar bhai (sahi) {

        } nahi to bhai (sahi)
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        hi bhai
        agar bhai (sahi) {

        } nahi to bhai (sahi) {

        } nahi to bhai (sahi)
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        hi bhai
        agar bhai (sahi) {

        } nahi to bhai
        bye bhai;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        hi bhai
        agar bhai (sahi) {

        } nahi to bhai (sahi) {

        } nahi to bhai
        bye bhai;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        hi bhai
          agla dekh bhai
        bye bhai
      `,
    output: SyntaxError,
  },
]