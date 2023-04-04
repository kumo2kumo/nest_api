import { registerEnumType } from '@nestjs/graphql';

export enum ScheduleScalarFieldEnum {
    id = "id",
    activityDay = "activityDay",
    time = "time",
    category = "category",
    place = "place",
    address = "address",
    meetingTime = "meetingTime",
    opponent = "opponent",
    matchTime = "matchTime",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clubId = "clubId"
}


registerEnumType(ScheduleScalarFieldEnum, { name: 'ScheduleScalarFieldEnum', description: undefined })
