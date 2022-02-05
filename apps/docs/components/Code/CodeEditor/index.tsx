import React, { useState } from "react";
import Editor from "react-simple-code-editor";

import { highlight } from "prismjs";

import { bhaiLangSyntax } from "./syntax";

import "prismjs/themes/prism-tomorrow.css";


const CodeEditor= (props: Props) => {
const {} = props;
const [code, setCode] = useState('');
  

  
  const highlightWithLineNumbers = (input: string) =>
    highlight(input, bhaiLangSyntax, 'bhaiLang')
      .split('\n')
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n')
  

return (
  <Editor
    value={code}
    onValueChange={code => setCode(code)}
    highlight={code => highlightWithLineNumbers(code)}
    padding={10}
    textareaClassName="codeArea"
    className="editor"
    style={{
      fontFamily: 'monospace',
      fontSize: 16,
    }}
  />
);
}
type Props = {}
export default React.memo(CodeEditor)
