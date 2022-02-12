import { NodeType } from "bhai-lang-parser";

import { RuntimeException } from "../../src";
import Scope from "../../src/components/scope";
import AssignmentExpression from "../../src/components/visitor/assignmentExpression";
import BinaryExpression from "../../src/components/visitor/binaryExpression";
import IdentifierExpression from "../../src/components/visitor/identifierExpression";
import PrintStatement from "../../src/components/visitor/printStatement";
import Program from "../../src/components/visitor/program";
import VariableDeclaration from "../../src/components/visitor/variableDeclaration";
import VariableStatement from "../../src/components/visitor/variableStatement";
import InvalidStateException from "../../src/exceptions/invalidStateException";

jest.mock("../../src/module/interpreterModule");

const assignmentExpression = new AssignmentExpression();

const binaryExpression = new BinaryExpression();

const identifierExpression = new IdentifierExpression();

const program = new Program();

const variableDeclaration = new VariableDeclaration();

const variableStatement = new VariableStatement();

const printStatement = new PrintStatement();

const scope = new Scope(null);

test("interpreter test assignmentExpression without left node should throw an exception", () => {
  const astNode = {
    type: NodeType.ExpressionStatement,
    operator: "=",
  };

  expect(() => assignmentExpression.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test binaryExpression without left node should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    operator: "=",
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test binaryExpression without right node should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    operator: "=",
    left: {
      type: NodeType.NumericLiteral,
      value: 5,
    },
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test binaryExpression without operator should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    left: {
      type: NodeType.NumericLiteral,
      value: 5,
    },
    right: {
      type: NodeType.NumericLiteral,
      value: 10,
    },
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test identifierExpression without identifier should throw an exception", () => {
  const astNode = {
    type: NodeType.IdentifierExpression,
  };

  expect(() => identifierExpression.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test(`interpreter test "Program" without body should throw an exception`, () => {
  const astNode = {
    type: NodeType.Program,
  };

  expect(() => program.visitNode(astNode)).toThrow(InvalidStateException);
});

test(`interpreter test "Program" with an array body should throw an exception`, () => {
  const astNode = {
    type: NodeType.Program,
    body: [],
  };

  expect(() => program.visitNode(astNode)).toThrow(InvalidStateException);
});

test("interpreter test VariableDeclaration without an id should throw an exception", () => {
  const astNode = {
    type: NodeType.VariableDeclaration,
    init: {
      type: NodeType.NullLiteral,
      value: null,
    },
  };

  expect(() => variableDeclaration.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test VariableDeclaration without an init should throw an exception", () => {
  const astNode = {
    type: NodeType.VariableDeclaration,
    id: {
      type: NodeType.IdentifierExpression,
      name: "a",
    },
  };

  expect(() => variableDeclaration.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test VariableStatement without variable declarations should throw an exception", () => {
  const astNode = {
    type: NodeType.VariableStatement,
  };

  expect(() => variableStatement.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test PrintStatement without expressions should throw an exception", () => {
  const astNode = {
    type: NodeType.PrintStatement,
  };

  expect(() => printStatement.visitNode(astNode)).toThrow(
    InvalidStateException
  );
});

test("interpreter test Scope assign with undeclared variable should throw an exception", () => {
  expect(() => scope.assign("undeclared_identifier", 45)).toThrow(
    RuntimeException
  );
});
