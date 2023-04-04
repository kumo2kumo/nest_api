import { registerEnumType } from '@nestjs/graphql';

export enum UniformOwnerScalarFieldEnum {
    id = "id",
    number = "number",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    clubId = "clubId"
}


registerEnumType(UniformOwnerScalarFieldEnum, { name: 'UniformOwnerScalarFieldEnum', description: undefined })
