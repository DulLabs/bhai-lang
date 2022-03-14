export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bhai
      chal bhai
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bhai
      chal bhai
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bhai
      ;
      chal bhai
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bhai
      ;
      ;
      ;;
      chal bhai
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bhai
      {};
      chal bhai
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bhai
      {
        bhai ye hai a = 4;
      }
      chal bhai
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bhai
      bhai ye hai a, b, c;
      chal bhai
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b = "crap";
      chal bhai
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bhai
      bhai ye hai a = 10, b = 5;
      chal bhai
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 7 + 90;
      chal bhai
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bhai
      bhai ye hai a = sahi;
      a = 4;
      chal bhai
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      a *= 4;
      chal bhai
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a + 4);
      chal bhai
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      chal bhai
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi bhai
      bhai ye hai a = 2;
      (a * (4 + 8) + 10);
      chal bhai
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi bhai
    bhai ye hai x = 9;
    agar bhai (x != 9) {
      x = 5;
      bol bhai x;
    } warna bhai (x >= 9);
    chal bhai;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi bhai;
      bhai ye hai a , b;
      a = b = 60;
      bol bhai a, b;
      chal bhai
    `,
    output: "60 60",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi bhai;
      bhai ye hai a = 2, b = 60;
      bol bhai (a * (4 + 8) + 10), b;
      chal bhai
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
      chal bhai
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi bhai;
      bol bhai "hello", sahi, galat;
      chal bhai
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi bhai;
      bol bhai nalla;
      chal bhai;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi bhai;
      bol bhai 10, nalla;
      chal bhai;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi bhai;
      bol bhai "hello" + "crap";
      chal bhai;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi bhai;
      bhai ye hai a = 70;
      bol bhai 6*5, nalla, "jamtara", a;
      chal bhai;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a;
      chal bhai;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi bhai;
      bol bhai "undefined";
      chal bhai;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a;
      chal bhai;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      bol bhai a;
      chal bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi bhai;
      bhai ye hai a = galat;
      bol bhai a;
      chal bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a = 90;
      chal bhai;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi bhai;
      bol bhai 9 && 10;
      chal bhai;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bhai;
      bol bhai 9 || 10;
      chal bhai;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi bhai;
      bol bhai galat && sahi;
      chal bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi bhai;
    bhai ye hai a = sahi;
    bol bhai a && galat;
    chal bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi bhai;
    bhai ye hai a = sahi;
    bol bhai a && sahi;
    chal bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi bhai;
      bol bhai 9 == 10;
      chal bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi bhai;
      bol bhai 9 != 10;
      chal bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bhai;
      bol bhai 9 || 10;
      chal bhai;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi bhai;
      bol bhai galat || sahi;
      chal bhai;
    `,
    output: "sahi",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 0;
      jab tak bhai (a < 1) {
        bol bhai "bhai";
        a += 1;
      }
      chal bhai;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi bhai;
      jab tak bhai (sahi) 
        bas kar bhai;
      bol bhai "end";
      chal bhai;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        jab tak bhai (sahi)
          bas kar bhai;
        bol bhai "hello";
        agar bhai (sahi)
          bas kar bhai;
      }
      chal bhai;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        bol bhai "hello";
        agar bhai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      chal bhai;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi bhai
    agar bhai (sahi) {
      bol bhai "bhai";
    }
    chal bhai;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi bhai
    agar bhai (sahi) {
      bol bhai "sahi";
    } warna bhai {
      bol bhai "galat";
    }
    chal bhai;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi bhai
    bhai ye hai x = 9;
    agar bhai (x >= 9) {
      x = 5;
      bol bhai x;
    } 
    chal bhai;
    `,
    output: "5",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi bhai
        agar bhai (sahi && galat) {
          bol bhai "sahi";
        } warna bhai {
          bol bhai "galat";
        }
        chal bhai;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi bhai
        bol bhai 90 % 9;
        chal bhai;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bhai
        bol bhai 27 % 5;
        chal bhai;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bhai
        bol bhai 5 % 20;
        chal bhai;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      bol bhai step;
      chal bhai;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        bol bhai "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bol bhai step;
      chal bhai;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 10;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        agar bhai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        agar bhai (step == 1) agla dekh bhai
        step += 1;
      }
      bol bhai step;
      chal bhai;
    `,
    output: "1",
  },
];