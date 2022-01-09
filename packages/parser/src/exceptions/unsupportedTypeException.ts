export default class UnsupportedTypeException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = this.constructor.name;
    this.message = errorMessage;
  }
}
