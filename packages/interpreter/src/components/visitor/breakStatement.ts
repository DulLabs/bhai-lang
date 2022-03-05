import Visitor from ".";

import InterpreterModule from "../../module/interpreterModule";


export default class BreakStatement implements Visitor {
  visitNode() {
    if (InterpreterModule.getCurrentScope().isLoop()) {
      InterpreterModule.getCurrentScope().setBreakStatement(true);
    } else {
      throw new Error("Break statement outside loop");
    }
  }
}
