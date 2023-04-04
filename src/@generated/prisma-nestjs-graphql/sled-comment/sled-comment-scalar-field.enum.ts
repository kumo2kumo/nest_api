import { registerEnumType } from '@nestjs/graphql';

export enum SledCommentScalarFieldEnum {
    id = "id",
    comment = "comment",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    sledId = "sledId",
    userId = "userId",
    updateUserId = "updateUserId"
}


registerEnumType(SledCommentScalarFieldEnum, { name: 'SledCommentScalarFieldEnum', description: undefined })
