export const Tests = [
  {
    name: "empty init statement test",
    input: `
      hi bhai
      bye bhai
    `,
    output: `{"type":"Program","body":[{"type":"InitStatement","body":[]}]}`,
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
