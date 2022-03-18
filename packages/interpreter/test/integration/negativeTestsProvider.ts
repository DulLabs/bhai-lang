import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi bhai;
          a = 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi bhai;
          a += 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi bhai;
          a -= 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi bhai;
          a -= 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi bhai;
          a /= 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi bhai;
          a;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi bhai;
          a + b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi bhai;
          a + 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi bhai;
          a - 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi bhai;
          a - b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi bhai;
          a * 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi bhai;
          a * b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi bhai;
          a / 4;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi bhai;
          a / b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi bhai;
          bol bhai a;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi bhai;
          bol bhai a, b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi bhai;
          bhai ye hai a = 8;
          bol bhai a, b;
          bye bhai;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi bhai;
          bhai ye hai a = b = 8;
          bye bhai;
        `,
    exception: RuntimeException,
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
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a + 9;
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = nalla;
      bol bhai a + 9;
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = nalla + 80;
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = nalla + "jam";
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b = a + "hello";
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b = ((a*9) * a + "hello");
      bye bhai;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      bol bhai a + 9;
      bye bhai;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = galat;
      bol bhai a + 9;
      bye bhai;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = sahi + 80;
      bye bhai;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = galat + 80;
      bye bhai;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      bhai ye hai b = a + "hello";
      bye bhai;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      hi bhai;
      bhai ye hai a = galat;
      bhai ye hai b = ((a*9) * a + "hello");
      bye bhai;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        hi bhai
        (nalla * (4 + 8 + 10));
        bye bhai
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        hi bhai
        (nalla * (sahi + 8 + 10));
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        hi bhai
        (sahi * (nalla + 8 + 10));
        bye bhai
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        hi bhai
        (nalla + sahi);
        bye bhai
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi bhai
        (sahi * (4 + 8 + 10));
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi bhai
        sahi + galat;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = sahi, b = galat;
        a + b;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi bhai
        sahi * galat;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = sahi, b = galat;
        a * b;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi bhai
        sahi / galat;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = sahi, b = galat;
        a / b;
        bye bhai
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        hi bhai
        bol bhai nalla + 5;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a;
        a *= 5;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = sahi;
        a *= 5;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = nalla;
        a /= 5;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi bhai
        jab tak bhai (sahi) {

        }
        bye bhai;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = 0;
        jab tak bhai (a < 2) {
          bol bhai "bhai";
        }
        bye bhai;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = 0;
        agar bhai (sahi)
          bas kar bhai;
        bye bhai;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        hi bhai
        bol bhai nalla && 90;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a;
        bol bhai a && 90;
        bye bhai;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi bhai;
      bol bhai "sahi" % 9;
      bye bhai;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = 0;
        jab tak bhai (a < 2) {
          agla dekh bhai;
          a = 5;
        }
        bye bhai;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi bhai
        bhai ye hai a = 0;
        agar bhai (sahi)
          agla dekh bhai
        bye bhai;
      `,
    output: RuntimeException,
  },
];
