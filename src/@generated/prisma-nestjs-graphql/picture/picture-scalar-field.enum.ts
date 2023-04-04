import { registerEnumType } from '@nestjs/graphql';

export enum PictureScalarFieldEnum {
    id = "id",
    base64 = "base64",
    mainFlag = "mainFlag",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    pictureReportId = "pictureReportId"
}


registerEnumType(PictureScalarFieldEnum, { name: 'PictureScalarFieldEnum', description: undefined })
