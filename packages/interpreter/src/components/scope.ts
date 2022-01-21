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
  }

  set(identifier: string, value: unknown) {
    this._variables.set(identifier, value);
  }
}
