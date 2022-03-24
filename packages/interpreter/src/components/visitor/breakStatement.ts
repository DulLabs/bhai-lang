import Visitor from ".";

import RuntimeException from "../../exceptions/runtimeException";
import InterpreterModule from "../../module/interpreterModule";


export default class BreakStatement implements Visitor {
  visitNode() {
    if (InterpreterModule.getCurrentScope().isLoop()) {
      InterpreterModule.getCurrentScope().setBreakStatement(true);
    } else {
      throw new RuntimeException(`Kya "போதும் நண்பா"?? Loop kahan hai?`);
    }
  }
}
