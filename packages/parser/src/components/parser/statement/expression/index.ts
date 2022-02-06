import { NodeType } from "../../../../constants/constants";
import NallaPointerException
  from "../../../../exceptions/nallaPointerException";
import BhaiLangModule from "../../../../module/bhaiLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return BhaiLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return BhaiLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return BhaiLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return BhaiLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return BhaiLangModule.getAssignmentExpression();

      default:
        return BhaiLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    expressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    let left = Expression.getExpressionImpl(expressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(expressionType).getExpression();
      
      this._checkForReservedKeywords(left);

      this._checkForReservedKeywords(right);
      
      left = {
        type: NodeType.BinaryExpression,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

  private _checkForReservedKeywords(node: ASTNode) {
    if (node.type === NodeType.NullLiteral)
      throw new NallaPointerException("Operand nalla hai");
    
    if (node.type === NodeType.BooleanLiteral)
      throw new SyntaxError(`Boolean operand: "${node.value}" allowed ni hai`);
  }
}
