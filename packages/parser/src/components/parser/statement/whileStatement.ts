import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";


export default class WhileStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.JAB_TAK_BHAI);

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

        const test = Expression.getExpressionImpl(
            NodeType.AssignmentExpression
            ).getExpression();

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

        if (this._tokenExecutor.getLookahead() == null) {
            throw new SyntaxError(`Unexpected end of "jab tak bhai" statement`);
        }

        const body = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

        return {
            type: NodeType.WhileStatement,
            test,
            body
        };
    }

}