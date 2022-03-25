import { editor } from "monaco-editor";

const options: editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  padding: { top: 16, bottom: 16 },
  tabSize: 2,
  autoClosingQuotes: "always",
  fontFamily: "Jetbrains Mono",
  fontLigatures: true,
  fontSize: 14,
  lineHeight: 32,
  suggestLineHeight: 32,
  cursorSmoothCaretAnimation: true,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
};

export default options;
