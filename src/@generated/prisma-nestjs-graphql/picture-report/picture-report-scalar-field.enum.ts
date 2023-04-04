import { registerEnumType } from '@nestjs/graphql';

export enum PictureReportScalarFieldEnum {
    id = "id",
    name = "name",
    date = "date",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId",
    uploadUserId = "uploadUserId"
}


registerEnumType(PictureReportScalarFieldEnum, { name: 'PictureReportScalarFieldEnum', description: undefined })
