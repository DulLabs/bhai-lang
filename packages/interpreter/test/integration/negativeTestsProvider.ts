import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hello dost;
          a = 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hello dost;
          a += 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hello dost;
          a -= 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hello dost;
          a -= 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hello dost;
          a /= 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hello dost;
          a;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hello dost;
          a + b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hello dost;
          a + 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hello dost;
          a - 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hello dost;
          a - b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hello dost;
          a * 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hello dost;
          a * b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hello dost;
          a / 4;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hello dost;
          a / b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hello dost;
          bolo dost a;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hello dost;
          bolo dost a, b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hello dost;
          dost ye hai a = 8;
          bolo dost a, b;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hello dost;
          dost ye hai a = b = 8;
          bye dost;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hello dost;
        dost ye hai a;
        a = 9;
        dost ye hai a = 0;
        bye dost;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a;
      bolo dost a + 9;
      bye dost;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = nalla;
      bolo dost a + 9;
      bye dost;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = nalla + 80;
      bye dost;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = nalla + "jam";
      bye dost;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a;
      dost ye hai b = a + "hello";
      bye dost;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a;
      dost ye hai b = ((a*9) * a + "hello");
      bye dost;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = sahi;
      bolo dost a + 9;
      bye dost;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = galat;
      bolo dost a + 9;
      bye dost;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = sahi + 80;
      bye dost;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = galat + 80;
      bye dost;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = sahi;
      dost ye hai b = a + "hello";
      bye dost;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      hello dost;
      dost ye hai a = galat;
      dost ye hai b = ((a*9) * a + "hello");
      bye dost;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        hello dost
        (nalla * (4 + 8 + 10));
        bye dost
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        hello dost
        (nalla * (sahi + 8 + 10));
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        hello dost
        (sahi * (nalla + 8 + 10));
        bye dost
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        hello dost
        (nalla + sahi);
        bye dost
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hello dost
        (sahi * (4 + 8 + 10));
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hello dost
        sahi + galat;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hello dost
        dost ye hai a = sahi, b = galat;
        a + b;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hello dost
        sahi * galat;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hello dost
        dost ye hai a = sahi, b = galat;
        a * b;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hello dost
        sahi / galat;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hello dost
        dost ye hai a = sahi, b = galat;
        a / b;
        bye dost
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        hello dost
        bolo dost nalla + 5;
        bye dost;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        hello dost
        dost ye hai a;
        a *= 5;
        bye dost;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        hello dost
        dost ye hai a = sahi;
        a *= 5;
        bye dost;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        hello dost
        dost ye hai a = nalla;
        a /= 5;
        bye dost;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hello dost
        jab tak dost (sahi) {

        }
        bye dost;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hello dost
        dost ye hai a = 0;
        jab tak dost (a < 2) {
          bolo dost "bhai";
        }
        bye dost;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hello dost
        dost ye hai a = 0;
        agar dost (sahi)
          bas karo dost;
        bye dost;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        hello dost
        bolo dost nalla && 90;
        bye dost;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        hello dost
        dost ye hai a;
        bolo dost a && 90;
        bye dost;
      `,
    output: NallaPointerException,
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should throw an exception`,
    input: `
      hello dost;
      bolo dost sahi != 10;
      bye dost;
    `,
    output: RuntimeException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hello dost;
      bolo dost "sahi" % 9;
      bye dost;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hello dost
        dost ye hai a = 0;
        jab tak dost (a < 2) {
          agla dekho dost;
          a = 5;
        }
        bye dost;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hello dost
        dost ye hai a = 0;
        agar dost (sahi)
          agla dekho dost
        bye dost;
      `,
    output: RuntimeException,
  },
];
