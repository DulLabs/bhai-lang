import * as React from "react";
import { OnChange } from "@monaco-editor/react";
import monacoOptions from "./options";
import Editor from "@monaco-editor/react";
import { bhailangConfig, bhailangSyntax } from "./monacoBhailang";
import { useMonaco } from "@monaco-editor/react";
import {
  reservedValueCompletions,
  keywordCompletions,
  snippetCompletions,
} from "./completions";
import { theme } from "./theme";

interface Props {
  handleChange: OnChange;
  code: string;
}

const MonacoCodeEditor = (props: Props) => {
  const monaco = useMonaco();
  React.useEffect(() => {
    if (monaco) {
      monaco.languages.register({ id: "bhailang" });
      monaco.languages.setMonarchTokensProvider("bhailang", bhailangSyntax);
      monaco.languages.setLanguageConfiguration("bhailang", bhailangConfig);
      monaco.languages.registerCompletionItemProvider("bhailang", {
        provideCompletionItems: () => {
          var suggestions = [
            ...keywordCompletions(monaco),
            ...snippetCompletions(monaco),
            ...reservedValueCompletions(monaco),
          ];
          return { suggestions: suggestions };
        },
      });
      monaco.editor.defineTheme("my-theme", theme);
      monaco.editor.setTheme("my-theme");
    }
  }, [monaco]);

  return (
    <div className="shadow-md">
      <Editor
        height="50vh"
        language="bhailang"
        onChange={props.handleChange}
        value={props.code}
        options={monacoOptions}
        theme="vs-dark"
      />
    </div>
  );
};

export default React.memo(MonacoCodeEditor);
