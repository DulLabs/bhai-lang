import React, { useState } from "react";

import interpreter from "bhai-lang-interpreter";

import { sendEvents } from "../../helpers";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import MonacoCodeEditor from "./CodeEditor/monaco/MonacoCodeEditor";
import { OnChange } from "@monaco-editor/react";

const initialCode = `hi bhai
 bol bhai "Hello World";
 
  bhai ye hai a = 3;
  bhai ye hai b = 0;

  jab tak bhai (b < 5) {
    bol bhai b;

    agar bhai (b == a) {
      bol bhai "b is equal to a";
    } nahi to bhai (b == 0) {
      bol bhai "b is equal to zero";
    }

    b += 1;
  }

bye bhai
`;

const Code = (props: Props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Onchange is the event handler interface for React Monaco Editor
  const handleChange: OnChange = (newCode, event) => {
    setCode(newCode || "");
  };

  const executeCode = () => {
    let orignalConsoleLog = console.log;
    const outputList = [];
    let isExecusionSuccess = true;
    console.log = function (...args) {
      outputList.push({ value: args.join("\n"), isError: false });
    };

    try {
      interpreter.interpret(code);
    } catch (e) {
      if (e instanceof Error) {
        isExecusionSuccess = false;
        outputList.push({ value: e.message, isError: true });
      } else {
        console.error(e);
      }
    }

    sendEvents("CodeExecuted", { success: isExecusionSuccess });

    setIsSuccess(isExecusionSuccess);
    setOutput(outputList);
    console.log = orignalConsoleLog;
  };

  const clearCode = () => {
    sendEvents("CodeCleared");
    setCode("");
    setIsSuccess(null);
    setOutput([]);
  };

  return (
    <div id="playground" className="mx-4 sm:mx-12">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl my-4">
          Playground
        </h2>
        <div className="flex">
          <button
            disabled={!code}
            onClick={executeCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md text-white bg-bhagwa-600 hover:bg-bhagwa-700 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3 disabled:opacity-40"
          >
            Run
          </button>

          <button
            onClick={clearCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md text-bhagwa-700 bg-bhagwa-300 hover:bg-bhagwa-400 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3"
          >
            Clear
          </button>
        </div>
      </div>
      {/* <CodeEditor handleChange={handleChange} code={code} /> */}
      <MonacoCodeEditor handleChange={handleChange} code={code} />
      <Terminal output={output} isSuccess={isSuccess} />
    </div>
  );
};
type Props = {};
export default React.memo(Code);
