import { inject, injectable } from "inversify";
import { Spec } from "../../constants/bhaiLangSpec";
import { TYPES } from "../../container/types";
import { Token, Tokenizer } from "./types";

@injectable()
export default class TokenizerImpl implements Tokenizer {
  private _spec: Spec;
  private _string: String;
  private _cursor: number;

  constructor(@inject(TYPES.Spec) spec: Spec) {
    this._spec = spec;
    this._string = "";
    this._cursor = 0;
  }

  initTokenizer(stringToTokenize: String) {
    this._string = stringToTokenize;
    this._cursor = 0;
  }

  isEOF() {
    return this._cursor === this._string.length;
  }

  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  getNextToken(): Token | null {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);

    for (const { regex, tokenType } of this._spec) {
      const tokenValue = this._matched(regex, string);

      if (tokenValue === null) {
        continue;
      }

      if (tokenType === null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: tokenValue,
      };
    }

    throw new SyntaxError(`Unexpected token: "${string[0]}"`);
  }

  _matched(regex: RegExp, string: string) {
    const matched = regex.exec(string);
    if (matched === null) {
      return null;
    }
    this._cursor += matched[0].length;
    return matched[0];
  }
}
