import { NodeType } from "bhai-lang-parser";

import AssignmentExpression
  from "../../src/components/visitor/assignmentExpression";
import BinaryExpression from "../../src/components/visitor/binaryExpression";
import IdentifierExpression
  from "../../src/components/visitor/identifierExpression";
import Program from "../../src/components/visitor/program";
import InvalidStateException from "../../src/exceptions/invalidStateException";


jest.mock("../../src/module/interpreterModule");

const assignmentExpression = new AssignmentExpression();

const binaryExpression = new BinaryExpression();

const identifierExpression = new IdentifierExpression();

const program = new Program();

test("interpreter test assignmentExpression without left node should throw an exception", () => {
  const astNode = {
    type: NodeType.ExpressionStatement,
    operator: "="
  };

  expect(() => assignmentExpression.visitNode(astNode)).toThrow(InvalidStateException);

});


test("interpreter test binaryExpression without left node should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    operator: "="
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(InvalidStateException);

});

test("interpreter test binaryExpression without right node should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    operator: "=",
    left: {
      type: NodeType.NumericLiteral,
      value: 5
    }
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(InvalidStateException);

});

test("interpreter test binaryExpression without operator should throw an exception", () => {
  const astNode = {
    type: NodeType.BinaryExpression,
    left: {
      type: NodeType.NumericLiteral,
      value: 5
    },
    right: {
      type: NodeType.NumericLiteral,
      value: 10
    }
  };

  expect(() => binaryExpression.visitNode(astNode)).toThrow(InvalidStateException);

});

test("interpreter test identifierExpression without identifier should throw an exception", () => {
  const astNode = {
    type: NodeType.IdentifierExpression,
  };

  expect(() => identifierExpression.visitNode(astNode)).toThrow(InvalidStateException);

});

test("interpreter test program without body should throw an exception", () => {
  const astNode = {
    type: NodeType.IdentifierExpression,
  };

  expect(() => program.visitNode(astNode)).toThrow(InvalidStateException);

});

test("interpreter test program with an array body should throw an exception", () => {
  const astNode = {
    type: NodeType.IdentifierExpression,
    body: []
  };

  expect(() => program.visitNode(astNode)).toThrow(InvalidStateException);

});


