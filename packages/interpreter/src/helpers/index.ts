export function checkNumberOperands(operands:{ left: unknown, right: unknown }): operands is { left: number, right: number } {
  return (typeof operands.left === "number" && typeof operands.right === "number");
}

export function checkStringOperands(operands:{ left: unknown, right: unknown }): operands is { left: string, right: string } {
  return (typeof operands.left === "string" && typeof operands.right === "string");
}
