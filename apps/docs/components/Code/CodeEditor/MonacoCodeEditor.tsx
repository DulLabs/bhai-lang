import * as React from "react";
import { OnChange } from "@monaco-editor/react";
import monacoOptions from "./monacoOptions";
import Editor from "@monaco-editor/react";

interface Props {
  handleChange: OnChange;
  code: string;
}

const MonacoCodeEditor = (props: Props) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <Editor
        height="50vh"
        language="javascript"
        onChange={props.handleChange}
        value={props.code}
        options={monacoOptions}
        theme="vs-dark"
      />
    </div>
  );
};

export default React.memo(MonacoCodeEditor);
