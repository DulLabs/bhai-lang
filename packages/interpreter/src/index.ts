import parser from "bhai-lang-parser";

import Interpreter from "./components/interpreter";
import Scope from "./components/scope";

const scope = new Scope(null);
const interpreter = new Interpreter(parser, scope);

interpreter.interpret(`hi bhai bol bhai "Hello Bhai"; bye bhai`);
