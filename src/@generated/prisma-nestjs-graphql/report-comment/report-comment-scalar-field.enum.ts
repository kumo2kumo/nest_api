import { registerEnumType } from '@nestjs/graphql';

export enum ReportCommentScalarFieldEnum {
    id = "id",
    comment = "comment",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    reportId = "reportId"
}


registerEnumType(ReportCommentScalarFieldEnum, { name: 'ReportCommentScalarFieldEnum', description: undefined })
