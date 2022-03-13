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
    bye bhai;
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
      bye bhai
    `,
    output: "60 60",
  },
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
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bol bhai a = 90;
      bye bhai;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi bhai;
      bol bhai 9 && 10;
      bye bhai;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bhai;
      bol bhai 9 || 10;
      bye bhai;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi bhai;
      bol bhai galat && sahi;
      bye bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi bhai;
    bhai ye hai a = sahi;
    bol bhai a && galat;
    bye bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi bhai;
    bhai ye hai a = sahi;
    bol bhai a && sahi;
    bye bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi bhai;
      bol bhai 9 == 10;
      bye bhai;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi bhai;
      bol bhai 9 != 10;
      bye bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bhai;
      bol bhai 9 || 10;
      bye bhai;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi bhai;
      bol bhai galat || sahi;
      bye bhai;
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
      bye bhai;
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
      bye bhai;
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
      bye bhai;
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
      bye bhai;
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
    bye bhai;
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
    bye bhai;
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
    bye bhai;
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
        bye bhai;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi bhai
        bol bhai 90 % 9;
        bye bhai;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bhai
        bol bhai 27 % 5;
        bye bhai;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bhai
        bol bhai 5 % 20;
        bye bhai;
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
          aur bata bhai;
        }
        a -= 1;
      }
      bol bhai step;
      bye bhai;
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
          aur bata bhai;
        }
        a -= 1;
        aur bata bhai;
        bol bhai "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bol bhai step;
      bye bhai;
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
          aur bata bhai;
        }
        a -= 1;
        agar bhai (step == 1) aur bata bhai
        step += 1;
      }
      bol bhai step;
      bye bhai;
    `,
    output: "1",
  },
];