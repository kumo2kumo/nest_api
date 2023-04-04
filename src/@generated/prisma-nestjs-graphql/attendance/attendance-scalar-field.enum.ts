import { registerEnumType } from '@nestjs/graphql';

export enum AttendanceScalarFieldEnum {
    id = "id",
    text = "text",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    scheduleId = "scheduleId"
}


registerEnumType(AttendanceScalarFieldEnum, { name: 'AttendanceScalarFieldEnum', description: undefined })
