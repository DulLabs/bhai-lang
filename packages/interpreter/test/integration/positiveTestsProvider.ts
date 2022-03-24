export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      வணக்கம் நண்பா
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      வணக்கம் நண்பா
      நன்றி நண்பா
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      வணக்கம் நண்பா
      ;
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      வணக்கம் நண்பா
      ;
      ;
      ;;
      நன்றி நண்பா
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      வணக்கம் நண்பா
      {};
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      வணக்கம் நண்பா
      {
        இதான் நண்பா a = 4;
      }
      நன்றி நண்பா
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a, b, c;
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 10, b = "crap";
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 10, b = 5;
      நன்றி நண்பா
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 7 + 90;
      நன்றி நண்பா
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = sahi;
      a = 4;
      நன்றி நண்பா
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 2;
      a *= 4;
      நன்றி நண்பா
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 2;
      (a + 4);
      நன்றி நண்பா
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 2;
      (a + 4) * 10 + (5 - 4);
      நன்றி நண்பா
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 2;
      (a * (4 + 8) + 10);
      நன்றி நண்பா
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x != 9) {
      x = 5;
      சொல்லு நண்பா x;
    } அப்படி இல்லேன்னா (x >= 9);
    நன்றி நண்பா;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a , b;
      a = b = 60;
      சொல்லு நண்பா a, b;
      நன்றி நண்பா
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with ஒன்னுமேயில்லை நண்பா and "==", should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இப்படின்னா நண்பா (a == ஒன்னுமேயில்லை நண்பா) {
        சொல்லு நண்பா a;
      }
      நன்றி நண்பா
    `,
    output: "ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with ஒன்னுமேயில்லை நண்பா without any operator, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இப்படின்னா நண்பா (a) {
        சொல்லு நண்பா a;
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "not ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "not ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test - comparing ஒன்னுமேயில்லை நண்பா with ஒன்னுமேயில்லை நண்பா "==", should success`,
    input: `
      வணக்கம் நண்பா;
      இப்படின்னா நண்பா (ஒன்னுமேயில்லை நண்பா == ஒன்னுமேயில்லை நண்பா) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "hai ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with comparing ஒன்னுமேயில்லை நண்பா with var "a", should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இப்படின்னா நண்பா (ஒன்னுமேயில்லை நண்பா == a) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "hai ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with comparing ஒன்னுமேயில்லை நண்பா with var "a" explicit initialization, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      இப்படின்னா நண்பா (ஒன்னுமேயில்லை நண்பா == a) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "hai ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with comparing ஒன்னுமேயில்லை நண்பா with string ஒன்னுமேயில்லை நண்பா, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      இப்படின்னா நண்பா ("ஒன்னுமேயில்லை நண்பா" == a) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "not ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "not ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with comparing ஒன்னுமேயில்லை நண்பா with string ஒன்னுமேயில்லை நண்பா, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = "ஒன்னுமேயில்லை நண்பா";
      இப்படின்னா நண்பா (ஒன்னுமேயில்லை நண்பா == a) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "not ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "not ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with comparing ஒன்னுமேயில்லை நண்பா with string null, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = "null";
      இப்படின்னா நண்பா (ஒன்னுமேயில்லை நண்பா == a) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "not ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "not ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with ஒன்னுமேயில்லை நண்பா var "a" & "b" - 0, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b;
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "hai ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with ஒன்னுமேயில்லை நண்பா var "a" & "b" - 1, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b = ஒன்னுமேயில்லை நண்பா;
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "hai ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `binaryExpression print test with ஒன்னுமேயில்லை நண்பா var "a" & "b" -2, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b = "ஒன்னுமேயில்லை நண்பா";
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai ஒன்னுமேயில்லை நண்பா";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi ஒன்னுமேயில்லை நண்பா";
      }
      நன்றி நண்பா
    `,
    output: "nahi ஒன்னுமேயில்லை நண்பா",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      இப்படின்னா நண்பா (sahi == a) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat;
      இப்படின்னா நண்பா (galat == a) {
        சொல்லு நண்பா "hai galat";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi galat";
      }
      நன்றி நண்பா
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = "sahi";
      இப்படின்னா நண்பா (sahi == a) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 7;
      இப்படின்னா நண்பா (sahi == (a > 5)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 7;
      இப்படின்னா நண்பா ("sahi" == (a > 5)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      இப்படின்னா நண்பா ("sahi" == (a == sahi)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      இப்படின்னா நண்பா ((a == sahi) == (a == sahi)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இப்படின்னா நண்பா ((a == ஒன்னுமேயில்லை நண்பா) == (a == sahi)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இப்படின்னா நண்பா ((a == ஒன்னுமேயில்லை நண்பா) == (a == sahi)) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      இதான் நண்பா b = galat;
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai sahi";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi sahi";
      }
      நன்றி நண்பா
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat;
      இதான் நண்பா b = galat;
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai galat";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi galat";
      }
      நன்றி நண்பா
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = "galat";
      இதான் நண்பா b = galat;
      இப்படின்னா நண்பா (a == b) {
        சொல்லு நண்பா "hai galat";
      } அப்படி இல்லேன்னா {
        சொல்லு நண்பா "nahi galat";
      }
      நன்றி நண்பா
    `,
    output: "nahi galat",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 2, b = 60;
      சொல்லு நண்பா (a * (4 + 8) + 10), b;
      நன்றி நண்பா
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 2, b = 60;

      a = b + 3;
      சொல்லு நண்பா a, b;
      நன்றி நண்பா
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா "hello", sahi, galat;
      நன்றி நண்பா
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with ஒன்னுமேயில்லை நண்பா, should success",
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா ஒன்னுமேயில்லை நண்பா;
      நன்றி நண்பா;
    `,
    output: "ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: "printStatement test with ஒன்னுமேயில்லை நண்பா as second parameter, should success",
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 10, ஒன்னுமேயில்லை நண்பா;
      நன்றி நண்பா;
    `,
    output: "10 ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா "hello" + "crap";
      நன்றி நண்பா;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including ஒன்னுமேயில்லை நண்பா, should success",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 70;
      சொல்லு நண்பா 6*5, ஒன்னுமேயில்லை நண்பா, "jamtara", a;
      நன்றி நண்பா;
    `,
    output: "30 ஒன்னுமேயில்லை நண்பா jamtara 70",
  },
  {
    name: "printStatement test with ஒன்னுமேயில்லை நண்பா variable, should success",
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      சொல்லு நண்பா a;
      நன்றி நண்பா;
    `,
    output: "ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா "undefined";
      நன்றி நண்பா;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with ஒன்னுமேயில்லை நண்பா variable, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      சொல்லு நண்பா a;
      நன்றி நண்பா;
    `,
    output: "ஒன்னுமேயில்லை நண்பா",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = sahi;
      சொல்லு நண்பா a;
      நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = galat;
      சொல்லு நண்பா a;
      நன்றி நண்பா;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a;
      சொல்லு நண்பா a = 90;
      நன்றி நண்பா;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 9 && 10;
      நன்றி நண்பா;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 9 || 10;
      நன்றி நண்பா;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா galat && sahi;
      நன்றி நண்பா;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    வணக்கம் நண்பா;
    இதான் நண்பா a = sahi;
    சொல்லு நண்பா a && galat;
    நன்றி நண்பா;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    வணக்கம் நண்பா;
    இதான் நண்பா a = sahi;
    சொல்லு நண்பா a && sahi;
    நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 9 == 10;
      நன்றி நண்பா;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 9 != 10;
      நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா 9 || 10;
      நன்றி நண்பா;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா galat || sahi;
      நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா sahi != 10;
      நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      வணக்கம் நண்பா;
      சொல்லு நண்பா "sahi" == sahi;
      நன்றி நண்பா;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 0;
      இதுவரைக்கும் சுத்து நண்பா (a < 1) {
        சொல்லு நண்பா "bhai";
        a += 1;
      }
      நன்றி நண்பா;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      வணக்கம் நண்பா;
      இதுவரைக்கும் சுத்து நண்பா (sahi) 
        போதும் நண்பா;
      சொல்லு நண்பா "end";
      நன்றி நண்பா;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 0;
      இதுவரைக்கும் சுத்து நண்பா (a < 2) {
        இதுவரைக்கும் சுத்து நண்பா (sahi)
          போதும் நண்பா;
        சொல்லு நண்பா "hello";
        இப்படின்னா நண்பா (sahi)
          போதும் நண்பா;
      }
      நன்றி நண்பா;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 0;
      இதுவரைக்கும் சுத்து நண்பா (a < 2) {
        சொல்லு நண்பா "hello";
        இப்படின்னா நண்பா (sahi)
          போதும் நண்பா;
        போதும் நண்பா;
        போதும் நண்பா;
      }
      நன்றி நண்பா;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
      சொல்லு நண்பா "bhai";
    }
    நன்றி நண்பா;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
      சொல்லு நண்பா "sahi";
    } அப்படி இல்லேன்னா {
      சொல்லு நண்பா "galat";
    }
    நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x >= 9) {
      x = 5;
      சொல்லு நண்பா x;
    } 
    நன்றி நண்பா;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (galat) {
      சொல்லு நண்பா "galat";
    } இல்ல ஒருவேளை (sahi) {
      சொல்லு நண்பா "sahi";
    }
    நன்றி நண்பா;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 10;
    இப்படின்னா நண்பா (x < 5) {
      சொல்லு நண்பா "x < 5";
    } இல்ல ஒருவேளை (x < 8) {
      சொல்லு நண்பா "x < 8";
    } இல்ல ஒருவேளை (x < 12) {
      சொல்லு நண்பா "x < 12";
    } இல்ல ஒருவேளை (x < 15) {
      சொல்லு நண்பா "x < 15";
    }
    நன்றி நண்பா;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா a = 15;
    இப்படின்னா நண்பா (a < 0) {
      சொல்லு நண்பா "a < 0";
    } இல்ல ஒருவேளை (a > 0) {
      இப்படின்னா நண்பா (a < 10) {
        சொல்லு நண்பா "a < 10";
      } இல்ல ஒருவேளை (a < 20) {
        சொல்லு நண்பா "a < 20";
      }
    }
    நன்றி நண்பா
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 15;
    இப்படின்னா நண்பா (x < 5) {
      சொல்லு நண்பா "x < 5";
    } இல்ல ஒருவேளை (x < 8) {
      சொல்லு நண்பா "x < 8";
    } இல்ல ஒருவேளை (x < 12) {
      சொல்லு நண்பா "x < 12";
    } அப்படி இல்லேன்னா {
      சொல்லு நண்பா "x > 12";
    }
    நன்றி நண்பா;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi && galat) {
          சொல்லு நண்பா "sahi";
        } அப்படி இல்லேன்னா {
          சொல்லு நண்பா "galat";
        }
        நன்றி நண்பா;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா 90 % 9;
        நன்றி நண்பா;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா 27 % 5;
        நன்றி நண்பா;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா 5 % 20;
        நன்றி நண்பா;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 5;
      இதான் நண்பா step = 0;
      இதுவரைக்கும் சுத்து நண்பா (a > 0) {
        step += 1;
        இப்படின்னா நண்பா (a % 2 != 0){
          a -= 2;
          அடுத்தது நண்பா;
        }
        a -= 1;
      }
      சொல்லு நண்பா step;
      நன்றி நண்பா;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 5;
      இதான் நண்பா step = 0;
      இதுவரைக்கும் சுத்து நண்பா (a > 0) {
        step += 1;
        இப்படின்னா நண்பா (a % 2 == 0){
          a -= 2;
          அடுத்தது நண்பா;
        }
        a -= 1;
        அடுத்தது நண்பா;
        சொல்லு நண்பா "oye oye oye.. yha tk nhi aana tha bhai";
      }
      சொல்லு நண்பா step;
      நன்றி நண்பா;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      வணக்கம் நண்பா;
      இதான் நண்பா a = 10;
      இதான் நண்பா step = 0;
      இதுவரைக்கும் சுத்து நண்பா (a > 0) {
        இப்படின்னா நண்பா (a % 2 == 0){
          a -= 3;
          அடுத்தது நண்பா;
        }
        a -= 1;
        இப்படின்னா நண்பா (step == 1) அடுத்தது நண்பா
        step += 1;
      }
      சொல்லு நண்பா step;
      நன்றி நண்பா;
    `,
    output: "1",
  },
];