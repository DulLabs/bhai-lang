import { RuntimeException } from "../../src";


export const NegativeTestCases = [
    {
        name: "interpreter assigning variable before declaration test, should throw an exception",
        input: `
          hi bhai;
          a = 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with addition, should throw an exception",
        input: `
          hi bhai;
          a += 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
        input: `
          hi bhai;
          a -= 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
        input: `
          hi bhai;
          a -= 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test with division, should throw an exception",
        input: `
          hi bhai;
          a /= 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter assigning variable before declaration test - 2, should throw an exception",
        input: `
          hi bhai;
          a;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter adding two variables before declaration test, should throw an exception",
        input: `
          hi bhai;
          a + b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter adding variable with constant before declaration test, should throw an exception",
        input: `
          hi bhai;
          a + 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
        input: `
          hi bhai;
          a - 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter subtracting two variables before declaration test, should throw an exception",
        input: `
          hi bhai;
          a - b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
        input: `
          hi bhai;
          a * 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter multiplying two variables before declaration test, should throw an exception",
        input: `
          hi bhai;
          a * b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter dividing variable with constant before declaration test, should throw an exception",
        input: `
          hi bhai;
          a / 4;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter dividing two variables before declaration test, should throw an exception",
        input: `
          hi bhai;
          a / b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter printing variable before declaration test, should throw an exception",
        input: `
          hi bhai;
          bol bhai a;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter printing multiple variables before declaration test, should throw an exception",
        input: `
          hi bhai;
          bol bhai a, b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
        input: `
          hi bhai;
          bhai ye hai a = 8;
          bol bhai a, b;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
        name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
        input: `
          hi bhai;
          bhai ye hai a = b = 8;
          bye bhai;
        `,
        exception: RuntimeException
    },
    {
      name: "interpreter re declare already declared variable, should throw an exception",
      input: `
        hi bhai;
        bhai ye hai a;
        a = 9;
        bhai ye hai a = 0;
        bye bhai;
      `,
      exception: RuntimeException
  },
];