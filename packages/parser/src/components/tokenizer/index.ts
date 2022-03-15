import { Spec } from "../../constants/bhaiLangSpec";
import InvalidStateException from "../../exceptions/invalidStateException";

import { Token, Tokenizer } from "./types";


export default class TokenizerImpl implements Tokenizer {
  private _spec: Spec;
  private _string: String | undefined = undefined;
  private _cursor: number;

  constructor(spec: Spec) {
    this._spec = spec;
    this._cursor = 0;
  }

  initTokenizer(stringToTokenize: String) {
    this._string = stringToTokenize;
    this._cursor = 0;
  }

  isEOF() {
    if (!this._string) return true;

    return this._cursor === this._string.length;
  }

  hasMoreTokens() {
    if (!this._string) return false;

    return this._cursor < this._string.length;
  }

  getNextToken(): Token | null {
    if (!this._string)
      throw new InvalidStateException(
        "Tokenizer is not initialized with string. " +
          "Please call initTokenizer method first."
      );

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

    throw new SyntaxError(`Kya kar rha hai tu??...Unexpected token: "${string[0]}"`);
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
