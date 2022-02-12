import BhaiLangModule from "./module/bhaiLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default BhaiLangModule.getParser();
