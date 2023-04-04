import { registerEnumType } from '@nestjs/graphql';

export enum ToolOwnerScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    toolId = "toolId",
    userId = "userId"
}


registerEnumType(ToolOwnerScalarFieldEnum, { name: 'ToolOwnerScalarFieldEnum', description: undefined })
