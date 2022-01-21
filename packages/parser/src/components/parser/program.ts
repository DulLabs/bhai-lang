import { NodeType } from "../../constants/constants";

import StatementList from "./statementList";

export default class Program {
  private _statementList: StatementList;

  constructor(statementList: StatementList) {
    this._statementList = statementList;
  }

  getProgram() {
    return {
      type: NodeType.Program,
      body: this._statementList.getInitialStatementList(),
    };
  }
}
