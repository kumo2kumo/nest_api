import { registerEnumType } from '@nestjs/graphql';

export enum ReportScalarFieldEnum {
    id = "id",
    title = "title",
    text = "text",
    date = "date",
    time = "time",
    opponent = "opponent",
    myScore = "myScore",
    opponentScore = "opponentScore",
    category = "category",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId",
    uploadUserId = "uploadUserId"
}


registerEnumType(ReportScalarFieldEnum, { name: 'ReportScalarFieldEnum', description: undefined })
