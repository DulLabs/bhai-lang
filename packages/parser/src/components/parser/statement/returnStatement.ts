import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";
import NullLiteral from "./expression/literals/nullLiteral";


export default class ReturnStatement extends Statement {
    getStatement(): ASTNode {
        
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.RAKH_LE_BHAI);
        let value:ASTNode = new NullLiteral(this._tokenExecutor).getLiteral();
        if (this._tokenExecutor.getLookahead()?.type!==TokenTypes.SEMI_COLON_TYPE)
            value = Expression.getExpressionImpl(
                NodeType.AssignmentExpression
            ).getExpression();
        this._tokenExecutor.eatOptionalSemiColonToken();
        return {
            type: NodeType.ReturnStatement,
            expression: value,
        };
    }

}