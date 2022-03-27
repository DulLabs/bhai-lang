import React from "react";

import { highlight } from "prismjs";

import { didiLangSyntax } from "../common/syntax";
import CopyToClipboard from "../CopyToClipboard";

const Snippet = (props: Props) => {
  const { code } = props;

  return (
    <div className="relative snippet-container group">
      <div
        className="bg-editorBackground py-2 px-2 my-6 text-sm text-white documentation-code"
        dangerouslySetInnerHTML={{
          __html: highlight(code, didiLangSyntax, "didiLang").replace(
            new RegExp("\n", 'g'),
            "<br/>"
          ).replace(new RegExp('  ', 'g'), '&emsp;'),
        }}
      ></div>
      <CopyToClipboard text={code} />
    </div>
  );
  
};
type Props = { code: string };
export default React.memo(Snippet);
