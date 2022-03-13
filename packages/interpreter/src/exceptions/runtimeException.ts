export default class RuntimeException extends Error {
  constructor(errorMessage: string) {
    const errorName = "RuntimeException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = `${errorMessage}`;
  }
}
