import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutSchedulesInput } from '../club/club-update-one-required-without-schedules.input';
import { ReportUpdateOneWithoutScheduleInput } from '../report/report-update-one-without-schedule.input';
import { AttendanceUpdateManyWithoutScheduleInput } from '../attendance/attendance-update-many-without-schedule.input';

@InputType()
export class ScheduleUpdateWithoutPictureReportInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    activityDay?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    time?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    category?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    place?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    meetingTime?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    opponent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    matchTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutSchedulesInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutSchedulesInput;

    @Field(() => ReportUpdateOneWithoutScheduleInput, {nullable:true})
    report?: ReportUpdateOneWithoutScheduleInput;

    @Field(() => AttendanceUpdateManyWithoutScheduleInput, {nullable:true})
    attendances?: AttendanceUpdateManyWithoutScheduleInput;
}
