import { registerEnumType } from '@nestjs/graphql';

export enum ClubScalarFieldEnum {
    id = "id",
    name = "name",
    rankName = "rankName",
    rankUnit = "rankUnit",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ClubScalarFieldEnum, { name: 'ClubScalarFieldEnum', description: undefined })
