import { Token, Tokenizer } from '../tokenizer/types';

export default class TokenExecutor {

    private _tokenizer: Tokenizer;
    private _lookahead : Token | null = null;

    constructor(tokenizer: Tokenizer) {
        this._tokenizer = tokenizer;
    }

    eatTokenAndForwardLookahead(tokenType: string | null) {

        const token = this._lookahead;

        if (token == null) {
            throw new SyntaxError(
                `Unexpected end of input, expected : "${tokenType}"`
            );
        }
    
        if (token.type !== tokenType) {
            throw new SyntaxError(
                `Unexpected token: "${token.value}", expected : "${tokenType}"`
            );
        }

        this.setLookahead(this._tokenizer.getNextToken());

        return token;
    }

    getLookahead() {
        return this._lookahead;
    }

    setLookahead(lookahead: Token | null) {
        this._lookahead = lookahead;
    }


}