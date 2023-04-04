import { registerEnumType } from '@nestjs/graphql';

export enum EventFeeScalarFieldEnum {
    id = "id",
    january = "january",
    february = "february",
    march = "march",
    april = "april",
    may = "may",
    june = "june",
    july = "july",
    august = "august",
    september = "september",
    october = "october",
    november = "november",
    december = "december",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    clubId = "clubId"
}


registerEnumType(EventFeeScalarFieldEnum, { name: 'EventFeeScalarFieldEnum', description: undefined })
