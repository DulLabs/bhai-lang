export default class UnsupportedTypeException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "UnsupportedTypeException";
    this.message = errorMessage;
  }
}
