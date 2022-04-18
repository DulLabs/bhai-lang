import { bhailangKeywords } from "./monacoBhailang";
import M from "monaco-editor";

export const keywordCompletions = (monaco: typeof M) =>
  bhailangKeywords.map((keyword) => ({
    label: keyword,
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: keyword,
  }));

export const snippetCompletions = (monaco: typeof M) => [
  {
    label: "byh",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: "bhai ye hai ${1:varname} = ${0:value};",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "Variable banata hai bhai",
  },
  {
    label: "bb",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: 'bol bhai ${1:"Kuch to bol bhai"};',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "Bolega bhai",
  },
  {
    label: "agb",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: ["agar bhai (${1:condition}) {", "\t$0", "}"].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "If statement",
  },
  {
    label: "ntb",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: ["nahi to bhai (${1:condition}) {", "\t$0", "}"].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "Elseif block",
  },
  {
    label: "wb",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: ["warna bhai {", "\t$0", "}"].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "Else block",
  },
  {
    label: "jtb",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      "jab tak bhai (${1:condition}) {",
      "\t${0:// kuch kar bhai}",
      "}",
    ].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "If-Else Statement",
  },
];

export const reservedValueCompletions = (monaco: typeof M) => [
  ...["sahi", "galat", "nalla"].map((b) => ({
    label: b,
    kind: monaco.languages.CompletionItemKind.Value,
    insertText: b,
  })),
];
