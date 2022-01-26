import RuntimeException from "../exceptions/runtimeException";


export default class Scope {
  _variables: Map<string, unknown> = new Map();
  _parentScope: Scope | null;

  constructor(parentScope: Scope | null) {
    this._parentScope = parentScope;
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
      throw new RuntimeException(`Variable "${identifier}" pehle se exist karta hai bhai. Check karle.`);
    }

    this._variables.set(identifier, value);
  }
}
