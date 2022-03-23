export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only vanakkam nanba, should throw an exception",
    input: `
        vanakkam nanba
      `,
    output: SyntaxError,
  },
  {
    name: "only nanri nanba, should throw an exception",
    input: `
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "multiple vanakkam nanba, should throw an exception",
    input: `
        vanakkam nanba
        vanakkam nanba
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        vanakkam nanba
        vanakkam nanba
        nanri nanba
        nanri nanba
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        vanakkam nanba
        {
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        vanakkam nanba
        }
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        vanakkam nanba
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        vanakkam nanba
        {
          naam = 4
        }
        nanri nanba
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        vanakkam nanba
        bol bhai ;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        vanakkam nanba
        bol bhai 478
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        vanakkam nanba
        bol bhai sahi galat;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        vanakkam nanba
        bol bhai ~!*;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        vanakkam nanba
        bol bhai a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan a b c;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan a 
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan ;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        vanakkam nanba
        nanba idhaan
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    vanakkam nanba
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
        vanakkam nanba
        a = 4
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        vanakkam nanba
        a *=- 4;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        vanakkam nanba
        "hello" = 4;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        vanakkam nanba
        5 = 890;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        vanakkam nanba
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        vanakkam nanba
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        vanakkam nanba
        (a + 4;
        nanri nanba
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        vanakkam nanba
        a + 4);
        nanri nanba
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        vanakkam nanba
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        vanakkam nanba
        (a * (4 + 8 + 10);
        nanri nanba
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    vanakkam nanba
    nanba idhaan a = b && ;
    nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    vanakkam nanba
    nanba idhaan a = && b;
    nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    vanakkam nanba
    agar bhai (&&);
    nanri nanba;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        vanakkam nanba
        agar bhai (sahi)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        vanakkam nanba
        warna bhai {

        }
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        vanakkam nanba
       agar bhai {

       }
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        vanakkam nanba
        nahi to bhai (sahi) {
        }
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        vanakkam nanba
        nahi to bhai (sahi) {
        } nahi to bhai (sahi) {
        }
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        vanakkam nanba
        agar bhai (sahi) {

        } nahi to bhai (sahi)
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        vanakkam nanba
        agar bhai (sahi) {

        } nahi to bhai (sahi) {

        } nahi to bhai (sahi)
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        vanakkam nanba
        agar bhai (sahi) {

        } nahi to bhai
        nanri nanba;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        vanakkam nanba
        agar bhai (sahi) {

        } nahi to bhai (sahi) {

        } nahi to bhai
        nanri nanba;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        vanakkam nanba
          agla dekh bhai
        nanri nanba
      `,
    output: SyntaxError,
  },
]