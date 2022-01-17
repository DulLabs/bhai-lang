export const ExpressionType = {
  AdditiveExpression: "AdditiveExpression",
  MultiplicativeExpression: "MultiplicativeExpression",
  PrimaryExpression: "PrimaryExpression",
  ParanthesizedExpression: "ParanthesizedExpression",
  IdentifierExpression: "IdentifierExpression",
  AssignmentExpression: "AssignmentExpression",
  BinaryExpression: "BinaryExpression",
} as const;

export const StatementTypes = {
  BlockStatement: "BlockStatement",
  EmptyStatement: "EmptyStatement",
  ExpressionStatement: "ExpressionStatement",
  InitStatement: "InitStatement",
  PrintStatement: "PrintStatement",
  VariableStatement: "VariableStatement",
};
