import Scope from "../../src/components/scope";
import InvalidStateException from "../../src/exceptions/invalidStateException";
import InterpreterModule from "../../src/module/interpreterModule";

jest.mock("../../src/components/visitor/program", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/initStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/printStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/emptyStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/blockStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/variableStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/identifierExpression", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/variableDeclaration", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/assignmentExpression", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/expressionStatement", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/binaryExpression", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/stringLiteral", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/numericLiteral", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/booleanLiteral", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});
jest.mock("../../src/components/visitor/nullLiteral", () => {
  return jest.fn().mockImplementation(() => ({
    visitNode: jest.fn(),
  }));
});

test("interpreter test InterpreterModule getVisitor with unknown node type should throw an exception", () => {
  expect(() =>
    InterpreterModule.getVisitor("visitor_for_this_node_type_not_present")
  ).toThrow(InvalidStateException);
});

test("interpreter test InterpreterModule getCurrentScope should success", () => {
  expect(InterpreterModule.getCurrentScope()).toBeInstanceOf(Scope);
});
