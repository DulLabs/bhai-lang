import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a = 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a += 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a -= 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a -= 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a /= 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a + b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a + 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a - 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a - b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a * 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a * b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a / 4;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          a / b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          சொல்லு நண்பா a;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          சொல்லு நண்பா a, b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          இதான் நண்பா a = 8;
          சொல்லு நண்பா a, b;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          வணக்கம் நண்பா;
          இதான் நண்பா a = b = 8;
          நன்றி நண்பா;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        வணக்கம் நண்பா;
        இதான் நண்பா a;
        a = 9;
        இதான் நண்பா a = 0;
        நன்றி நண்பா;
      `,
    exception: RuntimeException,
  },
  // cases with ஒன்னுமேயில்லை நண்பா
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா variable in expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      சொல்லு நண்பா a + 9;
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா variable in expression - 2, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      சொல்லு நண்பா a + 9;
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா in variable initialisation expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா + 80;
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா in variable initialisation expression - 2, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா + "jam";
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா variable in another variable initialisation expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b = a + "hello";
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use ஒன்னுமேயில்லை நண்பா variable in complex expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b = ((a*9) * a + "hello");
      நன்றி நண்பா;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      சொல்லு நண்பா a + 9;
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat;
      சொல்லு நண்பா a + 9;
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi + 80;
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat + 80;
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      இதான் நண்பா b = a + "hello";
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat;
      இதான் நண்பா b = ((a*9) * a + "hello");
      நன்றி நண்பா;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா * (4 + 8 + 10));
        நன்றி நண்பா
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா * (sahi + 8 + 10));
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand - 2, should throw ஒன்னுமேயில்லை நண்பா pointer exception",
    input: `
        வணக்கம் நண்பா
        (sahi * (ஒன்னுமேயில்லை நண்பா + 8 + 10));
        நன்றி நண்பா
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand - 3, should throw ஒன்னுமேயில்லை நண்பா pointer exception",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா + sahi);
        நன்றி நண்பா
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        (sahi * (4 + 8 + 10));
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        sahi + galat;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = sahi, b = galat;
        a + b;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        sahi * galat;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = sahi, b = galat;
        a * b;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        sahi / galat;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = sahi, b = galat;
        a / b;
        நன்றி நண்பா
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing ஒன்னுமேயில்லை நண்பா, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா ஒன்னுமேயில்லை நண்பா + 5;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing ஒன்னுமேயில்லை நண்பா, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a;
        a *= 5;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = sahi;
        a *= 5;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing ஒன்னுமேயில்லை நண்பா - 2, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
        a /= 5;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதுவரைக்கும் சுத்து நண்பா (sahi) {

        }
        நன்றி நண்பா;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = 0;
        இதுவரைக்கும் சுத்து நண்பா (a < 2) {
          சொல்லு நண்பா "bhai";
        }
        நன்றி நண்பா;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = 0;
        இப்படின்னா நண்பா (sahi)
          போதும் நண்பா;
        நன்றி நண்பா;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of ஒன்னுமேயில்லை நண்பா with &&, should throw an exception",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா ஒன்னுமேயில்லை நண்பா && 90;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of ஒன்னுமேயில்லை நண்பா variable with &&, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a;
        சொல்லு நண்பா a && 90;
        நன்றி நண்பா;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா "sahi" % 9;
      நன்றி நண்பா;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = 0;
        இதுவரைக்கும் சுத்து நண்பா (a < 2) {
          அடுத்தது நண்பா;
          a = 5;
        }
        நன்றி நண்பா;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = 0;
        இப்படின்னா நண்பா (sahi)
          அடுத்தது நண்பா
        நன்றி நண்பா;
      `,
    output: RuntimeException,
  },
];
