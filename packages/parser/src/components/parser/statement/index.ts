import BhaiLangModule from "../../../module/bhaiLangModule";
import { Token } from "../../tokenizer/types";

export default abstract class Statement {
    
    abstract getStatement(): any;

    static getStatementImpl(lookahead: Token) {
        switch (lookahead?.type) {
          case 'hi bhai':
            return BhaiLangModule.getInitStatement()
        }
      }
}