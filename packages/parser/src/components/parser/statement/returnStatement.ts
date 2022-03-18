import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";


export default class ReturnStatement extends Statement {
    getStatement(): ASTNode {
        
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.RAKH_LE_BHAI);

        const value = Expression.getExpressionImpl(
            NodeType.AssignmentExpression
            ).getExpression();

        return {
            type: NodeType.RetrunStatement,
            expression: value,
        };
    }

}