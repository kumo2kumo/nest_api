import { registerEnumType } from '@nestjs/graphql';

export enum SledScalarFieldEnum {
    id = "id",
    name = "name",
    topic = "topic",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId"
}


registerEnumType(SledScalarFieldEnum, { name: 'SledScalarFieldEnum', description: undefined })
