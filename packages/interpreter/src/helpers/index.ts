import { BooleanObject, DataObject, DataTypes, NumericObject, StringObject } from "../components/dataClass";
import InvalidStateException from "../exceptions/invalidStateException";
import RuntimeException from "../exceptions/runtimeException";


export function checkNumberOperands(operands: {
  left: DataObject;
  right: DataObject;
}):boolean{
  return (
    operands.left.getType() === DataTypes.Numeric && operands.right.getType() === DataTypes.Numeric
  );
}

export function checkStringOperands(operands: {
  left: DataObject;
  right: DataObject;
}):boolean{
  return (
    operands.left.getType() === DataTypes.String && operands.right.getType() === DataTypes.String
  );
}

export function checkNumberAndStringOperands(operands: {
  left: DataObject;
  right: DataObject;
}): operands is { left: StringObject; right: NumericObject }|{ left: NumericObject; right: StringObject } {
  return (
    (operands.left.getType() === DataTypes.String && operands.right.getType() === DataTypes.Numeric) ||
    (operands.right.getType() === DataTypes.String && operands.left.getType() === DataTypes.Numeric)
  );
}



export function getOperationValue(
  operands: { left: DataObject; right: DataObject },
  operator: string
) {
  const exception = new RuntimeException(
    `Ye kya kar raha hai: "${operator}" ke sath "${operands.left.getType()}" aur "${operands.right.getType()}" nahi jamte.`
  );

  switch (operator) {
    case "=":
      return operands.right;

    case "+=":
    case "+":
      if (checkNumberOperands(operands)) {
        return new NumericObject(operands.left.getValue() + operands.right.getValue());
      }

      if (checkStringOperands(operands)) {
        return new StringObject(operands.left.getValue() + operands.right.getValue());
      }

      if (checkNumberAndStringOperands(operands)) {
        return new StringObject(operands.left.toString() + operands.right.toString());
      }

      throw exception;

    case "-=":
    case "-":
      if (checkNumberOperands(operands)) {
        return new NumericObject(operands.left.getValue() - operands.right.getValue());
      }

      throw exception;

    case "*=":
    case "*":
      if (checkNumberOperands(operands)) {
        return new NumericObject(operands.left.getValue() * operands.right.getValue());
      }

      throw exception;

    case "/=":
    case "/":
      if (operands.right.getValue() === 0) {
        throw new RuntimeException(`Kya kar rha hai tu??...zero se divide ni karte`);
      }
      
      if (checkNumberOperands(operands)) {
        return new NumericObject(operands.left.getValue() / operands.right.getValue());
      }

      throw exception;
    
    case "%=":
    case "%":
      if (checkNumberOperands(operands)) {
        return new NumericObject(operands.left.getValue() % operands.right.getValue());
      }

      throw exception;

    case "==":
      return new BooleanObject(operands.left.getValue() === operands.right.getValue());    
    case "!=":
      return new BooleanObject(operands.left.getValue() !== operands.right.getValue());
   
    case ">":
      if (checkNumberOperands(operands)) {
        return new BooleanObject(operands.left.getValue() > operands.right.getValue());
      }

      throw exception;
    
    case "<":
      if (checkNumberOperands(operands)) {
        return new BooleanObject(operands.left.getValue() < operands.right.getValue());
      }

      throw exception;
    
    case ">=":
      if (checkNumberOperands(operands)) {
        return new BooleanObject(operands.left.getValue() >= operands.right.getValue());
      }

      throw exception;

    case "<=":
      if (checkNumberOperands(operands)) {
        return new BooleanObject(operands.left.getValue() <= operands.right.getValue());
      }

      throw exception;

    case "&&":
      if(operands.left.getValue()){
        return operands.right;
      }
      else {
        return operands.left;
      }

    case "||":
      if(operands.left.getValue()){
        return operands.left;
      }
      else{
        return operands.right;
      }
        
    default:
      throw new InvalidStateException(`Unsupported operator: ${operator}`);
  }
}
