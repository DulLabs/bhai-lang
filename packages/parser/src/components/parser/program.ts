import StatementList from './statementList';

export default class Program {
  _statementList: StatementList;

  constructor(statementList: StatementList) {
    this._statementList = statementList;
  }
  getProgram() {
    return {
      type: 'Program',
      body: this._statementList.getStatementList(),
    }
  }
}
