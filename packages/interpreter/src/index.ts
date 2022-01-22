import parser from "bhai-lang-parser";

import Interpreter from "./components/interpreter";
import Scope from "./components/scope";

const scope = new Scope(null);
const interpreter = new Interpreter(parser, scope);

interpreter.interpret(`hi bhai bol bhai "Hello Bhai";
  bhai ye hai a = 5,b;
  a-=10;
  b= a+5;
  bol bhai a;
  bol bhai b;
 bye bhai`);
