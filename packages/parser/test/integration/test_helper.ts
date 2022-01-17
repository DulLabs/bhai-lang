export const StatementTests = [
  // init statement tests
  {
    name: "empty init statement test, should success",
    input: `
      hi bhai
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[]}]}`,
  },
  {
    name: "empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bhai
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[]}]}`,
  },
  // empty statement tests
  {
    name: "empty statement test, should success",
    input: `
      hi bhai
      ;
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"EmptyStatement"}]}]}`,
  },
  {
    name: "multiple empty statements test, should success",
    input: `
      hi bhai
      ;
      ;
      ;;
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"EmptyStatement"},{"type":"EmptyStatement"},{"type":"EmptyStatement"},{"type":"EmptyStatement"}]}]}`,
  },
  // block statement tests
  {
    name: "block statement test with empty block, should success",
    input: `
      hi bhai
      {}
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"BlockStatement","body":[]}]}]}`,
  },
  {
    name: "block statement test with assignment expression inside, should success",
    input: `
      hi bhai
      {
        a = 4;
      }
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":4}}}]}]}]}`,
  },
  {
    name: "block statement test with variable statement inside, should success",
    input: `
      hi bhai
      {
        bhai ye hai a = 4;
      }
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"BlockStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":4}}]}]}]}]}`,
  },
  {
    name: "simple assignment expression test with only one identifer",
    input: `
      hi bhai
      a = 4;
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":4}}}]}]}`,
  },
  {
    name: "complex assignment expression test with only one identifer",
    input: `
      hi bhai
      a *= 4;
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"*=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":4}}}]}]}`,
  },
];
