export default class NallaPointerException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = "NallaPointerException";
    this.message = errorMessage;
  }
}
