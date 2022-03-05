export default class RuntimeException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "RuntimeException";
    this.message = `${errorMessage}`;
  }
}
