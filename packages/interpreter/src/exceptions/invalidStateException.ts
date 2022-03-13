export default class InvalidStateException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "InvalidStateException";
    this.message = errorMessage;
  }
}
