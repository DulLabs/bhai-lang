export type ASTNode = {
  type: string;
  body?: ASTNode | ASTNode[]
  expressions?: ASTNode[];
  expression?: ASTNode;
  operator?: string;
  name?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: string | number;
  id?: ASTNode;
  init?: ASTNode | null;
  declarations?: ASTNode[];
}
