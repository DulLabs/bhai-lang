export const StatementTests = [
  // init statement tests
  {
    name: "empty init statement test, should success",
    input: `
      வணக்கம் நண்பா
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon, should success",
    input: `
      வணக்கம் நண்பா;
      நன்றி நண்பா;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon - 2, should success",
    input: `
      வணக்கம் நண்பா;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      வணக்கம் நண்பா
      நன்றி நண்பா;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  // empty statement tests
  {
    name: "multiple empty statements test, should success",
    input: `
      வணக்கம் நண்பா
      ;
      ;
      ;;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"}]}}`,
  },
  // block statement tests
  {
    name: "block statement test with empty block, should success",
    input: `
      வணக்கம் நண்பா
      {}
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with empty block and semi colon, should success",
    input: `
      வணக்கம் நண்பா;
      {};
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with assignment expression inside, should success",
    input: `
      வணக்கம் நண்பா;
      {
        naam = 4;
      }
      நன்றி நண்பா;
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"naam\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}]}}`,
  },
  {
    name: "block statement test with variable statement inside, should success",
    input: `
      வணக்கம் நண்பா
      {
        இதான் நண்பா a = 4;
      }
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":4}}]}]}]}}`,
  },
  // print statement test
  {
    name: "print statement test with string printing, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா "puff...";
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"StringLiteral\",\"value\":\"puff...\"}]}]}}`,
  },
  {
    name: "print statement test with number printing, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா 478;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":478}]}]}}`,
  },
  {
    name: "print statement test with boolean printing, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா sahi, galat;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"BooleanLiteral\",\"value\":\"sahi\"},{\"type\":\"BooleanLiteral\",\"value\":\"galat\"}]}]}}`,
  },
  {
    name: "print statement test with identifier printing, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா a, b, c;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"IdentifierExpression\",\"name\":\"a\"},{\"type\":\"IdentifierExpression\",\"name\":\"b\"},{\"type\":\"IdentifierExpression\",\"name\":\"c\"}]}]}}`,
  },
  {
    name: "print statement test with ஒன்னுமேயில்லை நண்பா printing, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா ஒன்னுமேயில்லை நண்பா;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"}]}]}}`,
  },
  {
    name: "print statement test with variable ஒன்னுமேயில்லை நண்பா printing, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      சொல்லு நண்பா a;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"}}]},{"type":"PrintStatement","expressions":[{"type":"IdentifierExpression","name":"a"}]}]}}`,
  },
  {
    name: "print statement test with logical AND, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா a && b;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}}]}]}}`,
  },
  {
    name: "print statement test with assignment, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா a = 9;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":9}}]}]}}`,
  },
  {
    name: "print statement test with logical OR, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா 9 || 90;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"||","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "print statement test with equality operator, should success",
    input: `
      வணக்கம் நண்பா
      சொல்லு நண்பா 9 == 90;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"==","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  // variable statement test
  {
    name: "variable statement test with basic variable declaration, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a, b, c;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"ஒன்னுமேயில்லை நண்பா\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"ஒன்னுமேயில்லை நண்பா\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"c\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"ஒன்னுமேயில்லை நண்பா\"}}]}]}}`,
  },
  {
    name: "variable statement test with basic variable declaration and initialisation, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 10, b;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"ஒன்னுமேயில்லை நண்பா\"}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 10, b = 5;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":5}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation with same value, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = b = 5;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":5}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with some expression, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = 7 + 90;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":7},\"right\":{\"type\":\"NumericLiteral\",\"value\":90}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with ஒன்னுமேயில்லை நண்பா literal, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with ஒன்னுமேயில்லை நண்பா literal, should success",
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா a = ஒன்னுமேயில்லை நண்பா;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"}}]}]}}`,
  },
];

export const ExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      வணக்கம் நண்பா
      a = 4;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      வணக்கம் நண்பா
      a *= 4;
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"*=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      வணக்கம் நண்பா
      (a + 4);
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      வணக்கம் நண்பா
      (a + 4) * 10 + (5 - 4);
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}}]}}`,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      வணக்கம் நண்பா
      (a * (4 + 8) + 10);
      நன்றி நண்பா
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":4},\"right\":{\"type\":\"NumericLiteral\",\"value\":8}}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    வணக்கம் நண்பா
    (x = 9);
    நன்றி நண்பா;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    வணக்கம் நண்பா
    (x >= 9);
    நன்றி நண்பா;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  // ஒன்னுமேயில்லை நண்பா and boolean expression test
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand, should success",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா * (4 + 8 + 10));
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand, should success",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா * (sahi + 8 + 10));
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand - 2, should success",
    input: `
        வணக்கம் நண்பா
        (sahi * (ஒன்னுமேயில்லை நண்பா + 8 + 10));
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one ஒன்னுமேயில்லை நண்பா operand and one boolean operand - 3, should success",
    input: `
        வணக்கம் நண்பா
        (ஒன்னுமேயில்லை நண்பா + sahi);
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"},"right":{"type":"BooleanLiteral","value":"sahi"}}}]}}`,
  },
  {
    name: "complex expression test with one boolean operand, should success",
    input: `
        வணக்கம் நண்பா
        (sahi * (4 + 8 + 10));
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "expression test with only boolean operand, should success",
    input: `
        வணக்கம் நண்பா
        sahi + galat;
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BooleanLiteral","value":"galat"}}}]}}`,
  },
  {
    name: "multiplicative expression test with only boolean operand, should success",
    input: `
        வணக்கம் நண்பா
        sahi * galat;
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BooleanLiteral","value":"galat"}}}]}}`,
  },
  {
    name: "division expression test with only boolean operand, should success",
    input: `
        வணக்கம் நண்பா
        sahi / galat;
        நன்றி நண்பா
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"/","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BooleanLiteral","value":"galat"}}}]}}`,
  },
  {
    name: "print statement test with expression containing ஒன்னுமேயில்லை நண்பா, should success",
    input: `
        வணக்கம் நண்பா
        சொல்லு நண்பா ஒன்னுமேயில்லை நண்பா + 5;
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"ஒன்னுமேயில்லை நண்பா"},"right":{"type":"NumericLiteral","value":5}}]}]}}`,
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi && galat);
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BooleanLiteral","value":"galat"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test with expression, should success`,
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (a + b && d);
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test in variable declaration, should success`,
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = b && d;
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  // logical OR
  {
    name: `logical "||" test with sahi galat, should success`,
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (sahi || galat);
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BooleanLiteral","value":"sahi"},"right":{"type":"BooleanLiteral","value":"galat"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test with expression, should success`,
    input: `
        வணக்கம் நண்பா
        இப்படின்னா நண்பா (a + b || d);
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test in variable declaration, should success`,
    input: `
        வணக்கம் நண்பா
        இதான் நண்பா a = b || d;
        நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"||","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  {
    name: `identifier name starting with "sahi", should success`,
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா sahiValue = sahi;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"sahiValue"},"init":{"type":"BooleanLiteral","value":"sahi"}}]}]}}`,
  },
  {
    name: `identifier name starting with "galat", should success`,
    input: `
      வணக்கம் நண்பா
      இதான் நண்பா galatValue = 10;
      நன்றி நண்பா
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"galatValue"},"init":{"type":"NumericLiteral","value":10}}]}]}}`,
  },
];

export const IfStatementTests = [
  {
    name: "if statement success test - 1: only if",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 2: if else both",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    } அப்படி இல்லேன்னா {

    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"BlockStatement","body":[]}]}]}}`,
  },
  {
    name: "if statement success test - 3: if only with comarison condn",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x >= 9) {
      x = 5;
    } 
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x == 9) {
      x = 5;
    } 
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x == 9) {
      x = 5;
    } 
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 5: if only with inequality condn",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x != 9) {
      x = 5;
    } 
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 6: else with only expression statement",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x != 9) {
      x = 5;
    } அப்படி இல்லேன்னா (x >= 9);
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "if statement success test - 7: with block",
    input: `
    வணக்கம் நண்பா
    இதான் நண்பா x = 9;
    இப்படின்னா நண்பா (x != 9)
      x = 5;
    அப்படி இல்லேன்னா (x >= 9);
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "else-if statement success test - 1: if-else-if one level ladder",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 2: if-else-if one level ladder with else",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } அப்படி இல்லேன்னா {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
  {
    name: "else-if statement success test - 3: if-else-if multiple levels ladder",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 4: if-else-if multiple levels ladder with else",
    input: `
    வணக்கம் நண்பா
    இப்படின்னா நண்பா (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } இல்ல ஒருவேளை (sahi) {
    } அப்படி இல்லேன்னா {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"sahi"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
];

export const WhileStatementTests = [
  {
    name: "while statement success test: only if",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (sahi) {
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BooleanLiteral","value":"sahi"},"body":{"type":"BlockStatement","body":[]}}]}}`,
  },
  {
    name: "while statement success test: with some body",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9) {
      சொல்லு நண்பா "hello";
    }
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9)
      சொல்லு நண்பா "hello";
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement as body and statement outside of body",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9)
      சொல்லு நண்பா "hello";
    இதான் நண்பா a = 90;
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with break statement",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9) {
      போதும் நண்பா;
    }
    இதான் நண்பா a = 90;
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"BreakStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with continue statement",
    input: `
    வணக்கம் நண்பா
    இதுவரைக்கும் சுத்து நண்பா (x > 9) {
      அடுத்தது நண்பா;
    }
    இதான் நண்பா a = 90;
    நன்றி நண்பா;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"ContinueStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
];
