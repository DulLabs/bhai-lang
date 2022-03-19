import { NodeTypeValue } from "../../../constants/constants";

export type ASTNode = {
  type: NodeTypeValue;
  body?: ASTNode | ASTNode[];
  expressions?: ASTNode[];
  expression?: ASTNode;
  operator?: string;
  name?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: string | number | null;
  id?: ASTNode;
  init?: ASTNode | null;
  declarations?: ASTNode[];
  test?: ASTNode;
  consequent?: ASTNode;
  alternate?: ASTNode;
};
