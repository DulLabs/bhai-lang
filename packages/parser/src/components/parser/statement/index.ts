import { Token } from '../../tokenizer/types';
import InitStatement from './initStatement';

export default abstract class Statement {
  _initStatement: InitStatement;

  constructor(initStatement: InitStatement) {
    this._initStatement = initStatement;
  }

  abstract getStatement(): any;

  getStatementImpl(lookahead: Token) {
    switch (lookahead?.type) {
      case '{':
        return this._initStatement.getInitStatement();
    }
  }
}
