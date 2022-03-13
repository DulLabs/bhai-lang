import RuntimeException from "../exceptions/runtimeException";


export default class Scope {
  _variables: Map<string, unknown> = new Map();
  _isLoop = false;
  _isBreakStatement = false;
  _isContinueStatement = false;
  _parentScope: Scope | null;

  constructor(parentScope: Scope | null) {
    this._parentScope = parentScope;
  }

  isLoop() {
    return this._isLoop;
  }

  setLoop(isLoop: boolean) {
    this._isLoop = isLoop;
  }

  setBreakStatement(isBreakStatement: boolean) {
    this._isBreakStatement = isBreakStatement;
  }

  setContinueStatement(isContinueStatement: boolean) {
    this._isContinueStatement = isContinueStatement;
  }

  isBreakStatement() {
    return this._isBreakStatement;
  }

  isContinueStatement() {
    return this._isContinueStatement;
  }

  get(identifier: string): unknown {
    if (this._variables.has(identifier)) {
      return this._variables.get(identifier);
    }

    if (this._parentScope !== null) {
      return this._parentScope.get(identifier);
    }

    throw new RuntimeException(`Variable "${identifier}" bana to le pehle.`);
  }

  assign(identifier: string, value: unknown) {
    if (this._variables.has(identifier)) {
      this._variables.set(identifier, value);
      return;
    }

    if (this._parentScope !== null) {
      this._parentScope.assign(identifier, value);
      return;
    }

    throw new RuntimeException(
      `Variable "${identifier}" bana to le pehle fir assign karna.`
    );
  }

  declare(identifier: string, value: unknown) {
    if (this._variables.has(identifier)) {
      throw new RuntimeException(
        `Variable "${identifier}" pehle se exist karta hai bhai. Check karle.`
      );
    }

    this._variables.set(identifier, value);
  }
}
