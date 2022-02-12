import React from "react";

import { highlight } from "prismjs";

import { bhaiLangSyntax } from "../common/syntax";


const Snippet= (props: Props) => {
  const { code } = props;

return (
  <div className="bg-editorBackground py-2 px-2 my-6 text-sm text-white" dangerouslySetInnerHTML={{ __html: highlight(code, bhaiLangSyntax, 'bhaiLang').replaceAll('\n', '<br/>') }}>
    
    
  </div>
);
}
type Props = {code:string}
export default React.memo(Snippet)
