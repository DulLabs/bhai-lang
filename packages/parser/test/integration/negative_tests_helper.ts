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
      output: SyntaxError
    },
    {
      name: "only closed curly, should throw an exception",
      input: `
        hi bhai
        }
        bye bhai
      `,
      output: SyntaxError
    },
    {
      name: "open curly and no other token, should throw an exception",
      input: `
        hi bhai
        {
      `,
      output: SyntaxError
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
      output: SyntaxError
    },
    // print statement test
    {
      name: "empty print statement, should throw an exception",
      input: `
        hi bhai
        bol bhai ;
        bye bhai
      `,
      output: SyntaxError
    },
    {
      name: "print statement without semi colon, should throw an exception",
      input: `
        hi bhai
        bol bhai 478
        bye bhai
      `,
      output: SyntaxError
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
      output: SyntaxError
    },
    {
      name: "complex assignment expression test with unknown assignment, should throw an exception",
      input: `
        hi bhai
        a *=- 4;
        bye bhai
      `,
      output: SyntaxError
    },
    {
      name: "assignment expression test with invalid left hand side, should throw an exception",
      input: `
        hi bhai
        "hello" = 4;
        bye bhai
      `,
      output: SyntaxError
    },
    {
      name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
      input: `
        hi bhai
        5 = 890;
        bye bhai
      `,
      output: SyntaxError
    },
    {
      name: "assignment expression test with no other token, should throw an exception",
      input: `
        hi bhai
        a = 890
      `,
      output: SyntaxError
    },
    // multiplicative expression test
    {
      name: "multiplicative expression test with no other token, should throw an exception",
      input: `
        hi bhai
        6 * 5 * 
      `,
      output: SyntaxError
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
  ];
  
  
  