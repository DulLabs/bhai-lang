import didiLangModule from "./module/didiLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default didiLangModule.getParser();
