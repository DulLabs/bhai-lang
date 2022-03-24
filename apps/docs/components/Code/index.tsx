import React, { useState } from "react";

import interpreter from "bhai-lang-interpreter";

import { sendEvents } from "../../helpers";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";


const initialCode = `
வணக்கம் நண்பா
 சொல்லு நண்பா "வணக்கமுங்க";
 
  இதான் நண்பா a = 3;
  இதான் நண்பா b = 0;

  இதுவரைக்கும் சுத்து நண்பா (b < 5) {
    சொல்லு நண்பா b;

    இப்படின்னா நண்பா (b == a) {
      சொல்லு நண்பா "b is equal to a";
    } இல்ல ஒருவேளை (b == 0) {
      சொல்லு நண்பா "b is equal to zero";
    }

    b += 1;
  }

நன்றி நண்பா
`;

const Code = (props: Props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (newCode: string) => {
    setCode(newCode);
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

    sendEvents("CodeExecuted", {success: isExecusionSuccess});

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
      <CodeEditor handleChange={handleChange} code={code} />
      <Terminal output={output} isSuccess={isSuccess} />
    </div>
  );
};
type Props = {};
export default React.memo(Code);
