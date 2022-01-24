export const NoOutputPositiveTests = [
    // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bhai
      bye bhai
    `
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bhai
      bye bhai
    `
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bhai
      ;
      bye bhai
    `
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bhai
      ;
      ;
      ;;
      bye bhai
    `
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bhai
      {};
      bye bhai
    `
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bhai
      {
        bhai ye hai a = 4;
      }
      bye bhai
    `
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bhai
      bhai ye hai a, b, c;
      bye bhai
    `
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b;
      bye bhai
    `
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b = 5;
      bye bhai
    `
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 7 + 90;
      bye bhai
    `
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bhai
      bhai ye hai a;
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
