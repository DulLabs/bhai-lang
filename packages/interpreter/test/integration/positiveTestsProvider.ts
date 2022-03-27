export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi didi
      bye didi
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi didi
      bye didi
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi didi
      ;
      bye didi
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi didi
      ;
      ;
      ;;
      bye didi
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi didi
      {};
      bye didi
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi didi
      {
        didi ye hai a = 4;
      }
      bye didi
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi didi
      didi ye hai a, b, c;
      bye didi
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi didi
      didi ye hai a = 10, b = "crap";
      bye didi
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi didi
      didi ye hai a = 10, b = 5;
      bye didi
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi didi
      didi ye hai a = 7 + 90;
      bye didi
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi didi
      didi ye hai a = sahi;
      a = 4;
      bye didi
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi didi
      didi ye hai a = 2;
      a *= 4;
      bye didi
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi didi
      didi ye hai a = 2;
      (a + 4);
      bye didi
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi didi
      didi ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye didi
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi didi
      didi ye hai a = 2;
      (a * (4 + 8) + 10);
      bye didi
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi didi
    didi ye hai x = 9;
    agar didi (x != 9) {
      x = 5;
      bol didi x;
    } warna didi (x >= 9);
    bye didi;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi didi;
      didi ye hai a , b;
      a = b = 60;
      bol didi a, b;
      bye didi
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi didi;
      didi ye hai a;
      agar didi (a == nalla) {
        bol didi a;
      }
      bye didi
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi didi;
      didi ye hai a;
      agar didi (a) {
        bol didi a;
      } warna didi {
        bol didi "not nalla";
      }
      bye didi
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi didi;
      agar didi (nalla == nalla) {
        bol didi "hai nalla";
      }
      bye didi
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi didi;
      didi ye hai a;
      agar didi (nalla == a) {
        bol didi "hai nalla";
      }
      bye didi
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi didi;
      didi ye hai a = nalla;
      agar didi (nalla == a) {
        bol didi "hai nalla";
      }
      bye didi
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi didi;
      didi ye hai a = nalla;
      agar didi ("nalla" == a) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "not nalla";
      }
      bye didi
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi didi;
      didi ye hai a = "nalla";
      agar didi (nalla == a) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "not nalla";
      }
      bye didi
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi didi;
      didi ye hai a = "null";
      agar didi (nalla == a) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "not nalla";
      }
      bye didi
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi didi;
      didi ye hai a;
      didi ye hai b;
      agar didi (a == b) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "nahi nalla";
      }
      bye didi
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi didi;
      didi ye hai a;
      didi ye hai b = nalla;
      agar didi (a == b) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "nahi nalla";
      }
      bye didi
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi didi;
      didi ye hai a;
      didi ye hai b = "nalla";
      agar didi (a == b) {
        bol didi "hai nalla";
      } warna didi {
        bol didi "nahi nalla";
      }
      bye didi
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi didi;
      didi ye hai a = sahi;
      agar didi (sahi == a) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi didi;
      didi ye hai a = galat;
      agar didi (galat == a) {
        bol didi "hai galat";
      } warna didi {
        bol didi "nahi galat";
      }
      bye didi
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi didi;
      didi ye hai a = "sahi";
      agar didi (sahi == a) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi didi;
      didi ye hai a = 7;
      agar didi (sahi == (a > 5)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi didi;
      didi ye hai a = 7;
      agar didi ("sahi" == (a > 5)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi didi;
      didi ye hai a = sahi;
      agar didi ("sahi" == (a == sahi)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi didi;
      didi ye hai a = sahi;
      agar didi ((a == sahi) == (a == sahi)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi didi;
      didi ye hai a;
      agar didi ((a == nalla) == (a == sahi)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi didi;
      didi ye hai a;
      agar didi ((a == nalla) == (a == sahi)) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi didi;
      didi ye hai a;
      didi ye hai b = galat;
      agar didi (a == b) {
        bol didi "hai sahi";
      } warna didi {
        bol didi "nahi sahi";
      }
      bye didi
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi didi;
      didi ye hai a = galat;
      didi ye hai b = galat;
      agar didi (a == b) {
        bol didi "hai galat";
      } warna didi {
        bol didi "nahi galat";
      }
      bye didi
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi didi;
      didi ye hai a = "galat";
      didi ye hai b = galat;
      agar didi (a == b) {
        bol didi "hai galat";
      } warna didi {
        bol didi "nahi galat";
      }
      bye didi
    `,
    output: "nahi galat",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi didi;
      didi ye hai a = 2, b = 60;
      bol didi (a * (4 + 8) + 10), b;
      bye didi
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi didi;
      didi ye hai a = 2, b = 60;

      a = b + 3;
      bol didi a, b;
      bye didi
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi didi;
      bol didi "hello", sahi, galat;
      bye didi
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi didi;
      bol didi nalla;
      bye didi;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi didi;
      bol didi 10, nalla;
      bye didi;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi didi;
      bol didi "hello" + "crap";
      bye didi;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi didi;
      didi ye hai a = 70;
      bol didi 6*5, nalla, "jamtara", a;
      bye didi;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi didi;
      didi ye hai a;
      bol didi a;
      bye didi;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi didi;
      bol didi "undefined";
      bye didi;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi didi;
      didi ye hai a;
      bol didi a;
      bye didi;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi didi;
      didi ye hai a = sahi;
      bol didi a;
      bye didi;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi didi;
      didi ye hai a = galat;
      bol didi a;
      bye didi;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi didi;
      didi ye hai a;
      bol didi a = 90;
      bye didi;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi didi;
      bol didi 9 && 10;
      bye didi;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi didi;
      bol didi 9 || 10;
      bye didi;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi didi;
      bol didi galat && sahi;
      bye didi;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi didi;
    didi ye hai a = sahi;
    bol didi a && galat;
    bye didi;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi didi;
    didi ye hai a = sahi;
    bol didi a && sahi;
    bye didi;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi didi;
      bol didi 9 == 10;
      bye didi;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi didi;
      bol didi 9 != 10;
      bye didi;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi didi;
      bol didi 9 || 10;
      bye didi;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi didi;
      bol didi galat || sahi;
      bye didi;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi didi;
      bol didi sahi != 10;
      bye didi;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi didi;
      bol didi "sahi" == sahi;
      bye didi;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi didi;
      didi ye hai a = 0;
      jab tak didi (a < 1) {
        bol didi "didi";
        a += 1;
      }
      bye didi;
    `,
    output: "didi",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi didi;
      jab tak didi (sahi) 
        bas kar didi;
      bol didi "end";
      bye didi;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi didi;
      didi ye hai a = 0;
      jab tak didi (a < 2) {
        jab tak didi (sahi)
          bas kar didi;
        bol didi "hello";
        agar didi (sahi)
          bas kar didi;
      }
      bye didi;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi didi;
      didi ye hai a = 0;
      jab tak didi (a < 2) {
        bol didi "hello";
        agar didi (sahi)
          bas kar didi;
        bas kar didi;
        bas kar didi;
      }
      bye didi;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi didi
    agar didi (sahi) {
      bol didi "didi";
    }
    bye didi;
    `,
    output: "didi",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi didi
    agar didi (sahi) {
      bol didi "sahi";
    } warna didi {
      bol didi "galat";
    }
    bye didi;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi didi
    didi ye hai x = 9;
    agar didi (x >= 9) {
      x = 5;
      bol didi x;
    } 
    bye didi;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi didi
    agar didi (galat) {
      bol didi "galat";
    } nahi to didi (sahi) {
      bol didi "sahi";
    }
    bye didi;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi didi
    didi ye hai x = 10;
    agar didi (x < 5) {
      bol didi "x < 5";
    } nahi to didi (x < 8) {
      bol didi "x < 8";
    } nahi to didi (x < 12) {
      bol didi "x < 12";
    } nahi to didi (x < 15) {
      bol didi "x < 15";
    }
    bye didi;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi didi
    didi ye hai a = 15;
    agar didi (a < 0) {
      bol didi "a < 0";
    } nahi to didi (a > 0) {
      agar didi (a < 10) {
        bol didi "a < 10";
      } nahi to didi (a < 20) {
        bol didi "a < 20";
      }
    }
    bye didi
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi didi
    didi ye hai x = 15;
    agar didi (x < 5) {
      bol didi "x < 5";
    } nahi to didi (x < 8) {
      bol didi "x < 8";
    } nahi to didi (x < 12) {
      bol didi "x < 12";
    } warna didi {
      bol didi "x > 12";
    }
    bye didi;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi didi
        agar didi (sahi && galat) {
          bol didi "sahi";
        } warna didi {
          bol didi "galat";
        }
        bye didi;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi didi
        bol didi 90 % 9;
        bye didi;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi didi
        bol didi 27 % 5;
        bye didi;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi didi
        bol didi 5 % 20;
        bye didi;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi didi;
      didi ye hai a = 5;
      didi ye hai step = 0;
      jab tak didi (a > 0) {
        step += 1;
        agar didi (a % 2 != 0){
          a -= 2;
          agla dekh didi;
        }
        a -= 1;
      }
      bol didi step;
      bye didi;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi didi;
      didi ye hai a = 5;
      didi ye hai step = 0;
      jab tak didi (a > 0) {
        step += 1;
        agar didi (a % 2 == 0){
          a -= 2;
          agla dekh didi;
        }
        a -= 1;
        agla dekh didi;
        bol didi "oye oye oye.. yha tk nhi aana tha didi";
      }
      bol didi step;
      bye didi;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi didi;
      didi ye hai a = 10;
      didi ye hai step = 0;
      jab tak didi (a > 0) {
        agar didi (a % 2 == 0){
          a -= 3;
          agla dekh didi;
        }
        a -= 1;
        agar didi (step == 1) agla dekh didi
        step += 1;
      }
      bol didi step;
      bye didi;
    `,
    output: "1",
  },
];