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
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      agar bhai (a == nalla) {
        bol bhai a;
      }
      bye bhai
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      agar bhai (a) {
        bol bhai a;
      } warna bhai {
        bol bhai "not nalla";
      }
      bye bhai
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi bhai;
      agar bhai (nalla == nalla) {
        bol bhai "hai nalla";
      }
      bye bhai
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      }
      bye bhai
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi bhai;
      bhai ye hai a = nalla;
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      }
      bye bhai
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bhai;
      bhai ye hai a = nalla;
      agar bhai ("nalla" == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      bye bhai
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bhai;
      bhai ye hai a = "nalla";
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      bye bhai
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi bhai;
      bhai ye hai a = "null";
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      bye bhai
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b;
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      bye bhai
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b = nalla;
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      bye bhai
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b = "nalla";
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      bye bhai
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      agar bhai (sahi == a) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi bhai;
      bhai ye hai a = galat;
      agar bhai (galat == a) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      bye bhai
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi bhai;
      bhai ye hai a = "sahi";
      agar bhai (sahi == a) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi bhai;
      bhai ye hai a = 7;
      agar bhai (sahi == (a > 5)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi bhai;
      bhai ye hai a = 7;
      agar bhai ("sahi" == (a > 5)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      agar bhai ("sahi" == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi bhai;
      bhai ye hai a = sahi;
      agar bhai ((a == sahi) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bhai;
      bhai ye hai a;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      bye bhai
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi bhai;
      bhai ye hai a = galat;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      bye bhai
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi bhai;
      bhai ye hai a = "galat";
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      bye bhai
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi bhai
      bhai ye hai a = 1.2, b = 2;
      bol bhai a + b;
      bye bhai
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi bhai
      bhai ye hai a = 1.2, b = 2.3;
      bol bhai a + b;
      bye bhai
    `,
    output: "3.5"
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
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi bhai;
      bol bhai sahi != 10;
      bye bhai;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi bhai;
      bol bhai "sahi" == sahi;
      bye bhai;
    `,
    output: "galat",
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
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi bhai
    agar bhai (galat) {
      bol bhai "galat";
    } nahi to bhai (sahi) {
      bol bhai "sahi";
    }
    bye bhai;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi bhai
    bhai ye hai x = 10;
    agar bhai (x < 5) {
      bol bhai "x < 5";
    } nahi to bhai (x < 8) {
      bol bhai "x < 8";
    } nahi to bhai (x < 12) {
      bol bhai "x < 12";
    } nahi to bhai (x < 15) {
      bol bhai "x < 15";
    }
    bye bhai;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi bhai
    bhai ye hai a = 15;
    agar bhai (a < 0) {
      bol bhai "a < 0";
    } nahi to bhai (a > 0) {
      agar bhai (a < 10) {
        bol bhai "a < 10";
      } nahi to bhai (a < 20) {
        bol bhai "a < 20";
      }
    }
    bye bhai
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi bhai
    bhai ye hai x = 15;
    agar bhai (x < 5) {
      bol bhai "x < 5";
    } nahi to bhai (x < 8) {
      bol bhai "x < 8";
    } nahi to bhai (x < 12) {
      bol bhai "x < 12";
    } warna bhai {
      bol bhai "x > 12";
    }
    bye bhai;
    `,
    output: "x > 12",
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
          agla dekh bhai;
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
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
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
          agla dekh bhai;
        }
        a -= 1;
        agar bhai (step == 1) agla dekh bhai
        step += 1;
      }
      bol bhai step;
      bye bhai;
    `,
    output: "1",
  },
];