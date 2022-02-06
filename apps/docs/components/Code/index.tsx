import React, { useState } from "react";

import interpreter, { RuntimeException } from "bhai-lang-interpreter";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";


const Code= (props: Props) => {
  const { } = props;
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (newCode: string) => {
    setCode(newCode);
  }

  const executeCode = () => {
    console.log = function (...args) {
      setOutput(args.toString());
    }

    try {
      interpreter.interpret(code);
    } catch (e) {
      if (e instanceof RuntimeException) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  }

return (
  <>
    <CodeEditor handleChange={handleChange} code={code }/>
    <Terminal/>
    <button onClick={executeCode}>Run Code</button>
    {output}
  </>
);
}
type Props = {}
export default React.memo(Code)
