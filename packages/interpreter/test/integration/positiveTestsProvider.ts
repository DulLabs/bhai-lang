export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      vanakkam nanba
      nanri nanba
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      vanakkam nanba
      nanri nanba
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      vanakkam nanba
      ;
      nanri nanba
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      vanakkam nanba
      ;
      ;
      ;;
      nanri nanba
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      vanakkam nanba
      {};
      nanri nanba
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      vanakkam nanba
      {
        nanba idhaan a = 4;
      }
      nanri nanba
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      vanakkam nanba
      nanba idhaan a, b, c;
      nanri nanba
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 10, b = "crap";
      nanri nanba
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 10, b = 5;
      nanri nanba
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 7 + 90;
      nanri nanba
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = sahi;
      a = 4;
      nanri nanba
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 2;
      a *= 4;
      nanri nanba
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 2;
      (a + 4);
      nanri nanba
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 2;
      (a + 4) * 10 + (5 - 4);
      nanri nanba
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      vanakkam nanba
      nanba idhaan a = 2;
      (a * (4 + 8) + 10);
      nanri nanba
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    vanakkam nanba
    nanba idhaan x = 9;
    agar bhai (x != 9) {
      x = 5;
      sollu nanba x;
    } warna bhai (x >= 9);
    nanri nanba;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      vanakkam nanba;
      nanba idhaan a , b;
      a = b = 60;
      sollu nanba a, b;
      nanri nanba
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      agar bhai (a == nalla) {
        sollu nanba a;
      }
      nanri nanba
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      agar bhai (a) {
        sollu nanba a;
      } warna bhai {
        sollu nanba "not nalla";
      }
      nanri nanba
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      vanakkam nanba;
      agar bhai (nalla == nalla) {
        sollu nanba "hai nalla";
      }
      nanri nanba
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      agar bhai (nalla == a) {
        sollu nanba "hai nalla";
      }
      nanri nanba
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = nalla;
      agar bhai (nalla == a) {
        sollu nanba "hai nalla";
      }
      nanri nanba
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = nalla;
      agar bhai ("nalla" == a) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "not nalla";
      }
      nanri nanba
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = "nalla";
      agar bhai (nalla == a) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "not nalla";
      }
      nanri nanba
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = "null";
      agar bhai (nalla == a) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "not nalla";
      }
      nanri nanba
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      nanba idhaan b;
      agar bhai (a == b) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "nahi nalla";
      }
      nanri nanba
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      nanba idhaan b = nalla;
      agar bhai (a == b) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "nahi nalla";
      }
      nanri nanba
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      nanba idhaan b = "nalla";
      agar bhai (a == b) {
        sollu nanba "hai nalla";
      } warna bhai {
        sollu nanba "nahi nalla";
      }
      nanri nanba
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = sahi;
      agar bhai (sahi == a) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = galat;
      agar bhai (galat == a) {
        sollu nanba "hai galat";
      } warna bhai {
        sollu nanba "nahi galat";
      }
      nanri nanba
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = "sahi";
      agar bhai (sahi == a) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 7;
      agar bhai (sahi == (a > 5)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 7;
      agar bhai ("sahi" == (a > 5)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = sahi;
      agar bhai ("sahi" == (a == sahi)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = sahi;
      agar bhai ((a == sahi) == (a == sahi)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      agar bhai ((a == nalla) == (a == sahi)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      agar bhai ((a == nalla) == (a == sahi)) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      nanba idhaan b = galat;
      agar bhai (a == b) {
        sollu nanba "hai sahi";
      } warna bhai {
        sollu nanba "nahi sahi";
      }
      nanri nanba
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = galat;
      nanba idhaan b = galat;
      agar bhai (a == b) {
        sollu nanba "hai galat";
      } warna bhai {
        sollu nanba "nahi galat";
      }
      nanri nanba
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = "galat";
      nanba idhaan b = galat;
      agar bhai (a == b) {
        sollu nanba "hai galat";
      } warna bhai {
        sollu nanba "nahi galat";
      }
      nanri nanba
    `,
    output: "nahi galat",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      vanakkam nanba;
      nanba idhaan a = 2, b = 60;
      sollu nanba (a * (4 + 8) + 10), b;
      nanri nanba
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      vanakkam nanba;
      nanba idhaan a = 2, b = 60;

      a = b + 3;
      sollu nanba a, b;
      nanri nanba
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      vanakkam nanba;
      sollu nanba "hello", sahi, galat;
      nanri nanba
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      vanakkam nanba;
      sollu nanba nalla;
      nanri nanba;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      vanakkam nanba;
      sollu nanba 10, nalla;
      nanri nanba;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      vanakkam nanba;
      sollu nanba "hello" + "crap";
      nanri nanba;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      vanakkam nanba;
      nanba idhaan a = 70;
      sollu nanba 6*5, nalla, "jamtara", a;
      nanri nanba;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      vanakkam nanba;
      nanba idhaan a;
      sollu nanba a;
      nanri nanba;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      vanakkam nanba;
      sollu nanba "undefined";
      nanri nanba;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      sollu nanba a;
      nanri nanba;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = sahi;
      sollu nanba a;
      nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = galat;
      sollu nanba a;
      nanri nanba;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a;
      sollu nanba a = 90;
      nanri nanba;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      vanakkam nanba;
      sollu nanba 9 && 10;
      nanri nanba;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      vanakkam nanba;
      sollu nanba 9 || 10;
      nanri nanba;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      vanakkam nanba;
      sollu nanba galat && sahi;
      nanri nanba;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    vanakkam nanba;
    nanba idhaan a = sahi;
    sollu nanba a && galat;
    nanri nanba;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    vanakkam nanba;
    nanba idhaan a = sahi;
    sollu nanba a && sahi;
    nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      vanakkam nanba;
      sollu nanba 9 == 10;
      nanri nanba;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      vanakkam nanba;
      sollu nanba 9 != 10;
      nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      vanakkam nanba;
      sollu nanba 9 || 10;
      nanri nanba;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      vanakkam nanba;
      sollu nanba galat || sahi;
      nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      vanakkam nanba;
      sollu nanba sahi != 10;
      nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      vanakkam nanba;
      sollu nanba "sahi" == sahi;
      nanri nanba;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 0;
      jab tak bhai (a < 1) {
        sollu nanba "bhai";
        a += 1;
      }
      nanri nanba;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      vanakkam nanba;
      jab tak bhai (sahi) 
        bas kar bhai;
      sollu nanba "end";
      nanri nanba;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 0;
      jab tak bhai (a < 2) {
        jab tak bhai (sahi)
          bas kar bhai;
        sollu nanba "hello";
        agar bhai (sahi)
          bas kar bhai;
      }
      nanri nanba;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 0;
      jab tak bhai (a < 2) {
        sollu nanba "hello";
        agar bhai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      nanri nanba;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    vanakkam nanba
    agar bhai (sahi) {
      sollu nanba "bhai";
    }
    nanri nanba;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    vanakkam nanba
    agar bhai (sahi) {
      sollu nanba "sahi";
    } warna bhai {
      sollu nanba "galat";
    }
    nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    vanakkam nanba
    nanba idhaan x = 9;
    agar bhai (x >= 9) {
      x = 5;
      sollu nanba x;
    } 
    nanri nanba;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    vanakkam nanba
    agar bhai (galat) {
      sollu nanba "galat";
    } nahi to bhai (sahi) {
      sollu nanba "sahi";
    }
    nanri nanba;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    vanakkam nanba
    nanba idhaan x = 10;
    agar bhai (x < 5) {
      sollu nanba "x < 5";
    } nahi to bhai (x < 8) {
      sollu nanba "x < 8";
    } nahi to bhai (x < 12) {
      sollu nanba "x < 12";
    } nahi to bhai (x < 15) {
      sollu nanba "x < 15";
    }
    nanri nanba;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    vanakkam nanba
    nanba idhaan a = 15;
    agar bhai (a < 0) {
      sollu nanba "a < 0";
    } nahi to bhai (a > 0) {
      agar bhai (a < 10) {
        sollu nanba "a < 10";
      } nahi to bhai (a < 20) {
        sollu nanba "a < 20";
      }
    }
    nanri nanba
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    vanakkam nanba
    nanba idhaan x = 15;
    agar bhai (x < 5) {
      sollu nanba "x < 5";
    } nahi to bhai (x < 8) {
      sollu nanba "x < 8";
    } nahi to bhai (x < 12) {
      sollu nanba "x < 12";
    } warna bhai {
      sollu nanba "x > 12";
    }
    nanri nanba;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        vanakkam nanba
        agar bhai (sahi && galat) {
          sollu nanba "sahi";
        } warna bhai {
          sollu nanba "galat";
        }
        nanri nanba;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        vanakkam nanba
        sollu nanba 90 % 9;
        nanri nanba;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        vanakkam nanba
        sollu nanba 27 % 5;
        nanri nanba;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        vanakkam nanba
        sollu nanba 5 % 20;
        nanri nanba;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 5;
      nanba idhaan step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      sollu nanba step;
      nanri nanba;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 5;
      nanba idhaan step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        sollu nanba "oye oye oye.. yha tk nhi aana tha bhai";
      }
      sollu nanba step;
      nanri nanba;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      vanakkam nanba;
      nanba idhaan a = 10;
      nanba idhaan step = 0;
      jab tak bhai (a > 0) {
        agar bhai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        agar bhai (step == 1) agla dekh bhai
        step += 1;
      }
      sollu nanba step;
      nanri nanba;
    `,
    output: "1",
  },
];