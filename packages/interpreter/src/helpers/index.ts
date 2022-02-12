import InvalidStateException from "../exceptions/invalidStateException";
import RuntimeException from "../exceptions/runtimeException";


export function checkNumberOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: number; right: number } {
  return (
    typeof operands.left === "number" && typeof operands.right === "number"
  );
}

export function checkStringOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: string; right: string } {
  return (
    typeof operands.left === "string" && typeof operands.right === "string"
  );
}

export function getOperationValue(
  operands: { left: unknown; right: unknown },
  operator: string
) {
  const exception = new RuntimeException(
    `Ye kya kar raha hai: "${operator}" ke sath "${typeof operands.left}" aur "${typeof operands.right}" nahi jamte.`
  );

  switch (operator) {
    case "=":
      return operands.right;

    case "+=":
    case "+":
      if (checkNumberOperands(operands)) {
        return operands.left + operands.right;
      }

      if (checkStringOperands(operands)) {
        return operands.left + operands.right;
      }

      throw exception;

    case "-=":
    case "-":
      if (checkNumberOperands(operands)) {
        return operands.left - operands.right;
      }

      throw exception;

    case "*=":
    case "*":
      if (checkNumberOperands(operands)) {
        return operands.left * operands.right;
      }

      throw exception;

    case "/=":
    case "/":
      if (checkNumberOperands(operands)) {
        return operands.left / operands.right;
      }

      throw exception;

    default:
      throw new InvalidStateException(`Unsupported operator: ${operator}`);
  }
}


