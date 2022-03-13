export default class NallaPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "NallaPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
