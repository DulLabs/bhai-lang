export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hello dost
      bye dost
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hello dost
      bye dost
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hello dost
      ;
      bye dost
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hello dost
      ;
      ;
      ;;
      bye dost
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hello dost
      {};
      bye dost
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hello dost
      {
        dost ye hai a = 4;
      }
      bye dost
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hello dost
      dost ye hai a, b, c;
      bye dost
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hello dost
      dost ye hai a = 10, b = "crap";
      bye dost
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hello dost
      dost ye hai a = 10, b = 5;
      bye dost
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hello dost
      dost ye hai a = 7 + 90;
      bye dost
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hello dost
      dost ye hai a = sahi;
      a = 4;
      bye dost
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hello dost
      dost ye hai a = 2;
      a *= 4;
      bye dost
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hello dost
      dost ye hai a = 2;
      (a + 4);
      bye dost
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hello dost
      dost ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye dost
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hello dost
      dost ye hai a = 2;
      (a * (4 + 8) + 10);
      bye dost
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hello dost
    dost ye hai x = 9;
    agar dost (x != 9) {
      x = 5;
      bolo dost x;
    } warna dost (x >= 9);
    bye dost;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hello dost;
      dost ye hai a , b;
      a = b = 60;
      bolo dost a, b;
      bye dost
    `,
    output: "60 60",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hello dost;
      dost ye hai a = 2, b = 60;
      bolo dost (a * (4 + 8) + 10), b;
      bye dost
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hello dost;
      dost ye hai a = 2, b = 60;

      a = b + 3;
      bolo dost a, b;
      bye dost
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hello dost;
      bolo dost "hello", sahi, galat;
      bye dost
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hello dost;
      bolo dost nalla;
      bye dost;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hello dost;
      bolo dost 10, nalla;
      bye dost;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hello dost;
      bolo dost "hello" + "crap";
      bye dost;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hello dost;
      dost ye hai a = 70;
      bolo dost 6*5, nalla, "jamtara", a;
      bye dost;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hello dost;
      dost ye hai a;
      bolo dost a;
      bye dost;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hello dost;
      bolo dost "undefined";
      bye dost;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hello dost;
      dost ye hai a;
      bolo dost a;
      bye dost;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hello dost;
      dost ye hai a = sahi;
      bolo dost a;
      bye dost;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hello dost;
      dost ye hai a = galat;
      bolo dost a;
      bye dost;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hello dost;
      dost ye hai a;
      bolo dost a = 90;
      bye dost;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hello dost;
      bolo dost 9 && 10;
      bye dost;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hello dost;
      bolo dost 9 || 10;
      bye dost;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hello dost;
      bolo dost galat && sahi;
      bye dost;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hello dost;
    dost ye hai a = sahi;
    bolo dost a && galat;
    bye dost;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hello dost;
    dost ye hai a = sahi;
    bolo dost a && sahi;
    bye dost;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hello dost;
      bolo dost 9 == 10;
      bye dost;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hello dost;
      bolo dost 9 != 10;
      bye dost;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hello dost;
      bolo dost 9 || 10;
      bye dost;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hello dost;
      bolo dost galat || sahi;
      bye dost;
    `,
    output: "sahi",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hello dost;
      dost ye hai a = 0;
      jab tak dost (a < 1) {
        bolo dost "bhai";
        a += 1;
      }
      bye dost;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hello dost;
      jab tak dost (sahi) 
        bas karo dost;
      bolo dost "end";
      bye dost;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hello dost;
      dost ye hai a = 0;
      jab tak dost (a < 2) {
        jab tak dost (sahi)
          bas karo dost;
        bolo dost "hello";
        agar dost (sahi)
          bas karo dost;
      }
      bye dost;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hello dost;
      dost ye hai a = 0;
      jab tak dost (a < 2) {
        bolo dost "hello";
        agar dost (sahi)
          bas karo dost;
        bas karo dost;
        bas karo dost;
      }
      bye dost;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hello dost
    agar dost (sahi) {
      bolo dost "bhai";
    }
    bye dost;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hello dost
    agar dost (sahi) {
      bolo dost "sahi";
    } warna dost {
      bolo dost "galat";
    }
    bye dost;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hello dost
    dost ye hai x = 9;
    agar dost (x >= 9) {
      x = 5;
      bolo dost x;
    } 
    bye dost;
    `,
    output: "5",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hello dost
        agar dost (sahi && galat) {
          bolo dost "sahi";
        } warna dost {
          bolo dost "galat";
        }
        bye dost;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hello dost
        bolo dost 90 % 9;
        bye dost;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hello dost
        bolo dost 27 % 5;
        bye dost;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hello dost
        bolo dost 5 % 20;
        bye dost;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hello dost;
      dost ye hai a = 5;
      dost ye hai step = 0;
      jab tak dost (a > 0) {
        step += 1;
        agar dost (a % 2 != 0){
          a -= 2;
          agla dekho dost;
        }
        a -= 1;
      }
      bolo dost step;
      bye dost;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hello dost;
      dost ye hai a = 5;
      dost ye hai step = 0;
      jab tak dost (a > 0) {
        step += 1;
        agar dost (a % 2 == 0){
          a -= 2;
          agla dekho dost;
        }
        a -= 1;
        agla dekho dost;
        bolo dost "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bolo dost step;
      bye dost;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hello dost;
      dost ye hai a = 10;
      dost ye hai step = 0;
      jab tak dost (a > 0) {
        agar dost (a % 2 == 0){
          a -= 3;
          agla dekho dost;
        }
        a -= 1;
        agar dost (step == 1) agla dekho dost
        step += 1;
      }
      bolo dost step;
      bye dost;
    `,
    output: "1",
  },
];