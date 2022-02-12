export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bhai
      bye bhai
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bhai
      bye bhai
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bhai
      ;
      bye bhai
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bhai
      ;
      ;
      ;;
      bye bhai
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bhai
      {};
      bye bhai
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bhai
      {
        bhai ye hai a = 4;
      }
      bye bhai
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bhai
      bhai ye hai a, b, c;
      bye bhai
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b = "crap";
      bye bhai
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b = 5;
      bye bhai
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 7 + 90;
      bye bhai
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bhai
      bhai ye hai a = sahi;
      a = 4;
      bye bhai
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      a *= 4;
      bye bhai
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a + 4);
      bye bhai
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye bhai
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a * (4 + 8) + 10);
      bye bhai
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi bhai;
      bhai ye hai a = 2, b = 60;
      bol bhai (a * (4 + 8) + 10), b;
      bye bhai
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi bhai;
      bhai ye hai a = 2, b = 60;

      a = b + 3;
      bol bhai a, b;
      bye bhai
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi bhai;
      bol bhai "hello", sahi, galat;
      bye bhai
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi bhai;
      bol bhai nalla;
      bye bhai;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi bhai;
      bol bhai 10, nalla;
      bye bhai;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi bhai;
      bol bhai "hello" + "crap";
      bye bhai;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi bhai;
      bhai ye hai a = 70;
      bol bhai 6*5, nalla, "jamtara", a;
      bye bhai;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a;
      bye bhai;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi bhai;
      bol bhai "undefined";
      bye bhai;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a;
      bye bhai;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      bol bhai a;
      bye bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a = galat;
      bol bhai a;
      bye bhai;
    `,
    output: "galat",
  },
];
