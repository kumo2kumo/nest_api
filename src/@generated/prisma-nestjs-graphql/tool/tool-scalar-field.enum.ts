import { registerEnumType } from '@nestjs/graphql';

export enum ToolScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId"
}


registerEnumType(ToolScalarFieldEnum, { name: 'ToolScalarFieldEnum', description: undefined })
