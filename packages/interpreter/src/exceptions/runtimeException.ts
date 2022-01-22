export default class RuntimeException extends Error {
  constructor(errorMessage: string) {
    super(errorMessage);
    this.name = this.constructor.name;
    this.message = `Are bhai bhai bhai.... : ${errorMessage}`;
  }
}
