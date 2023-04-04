import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceUpdateWithoutScheduleInput } from './attendance-update-without-schedule.input';
import { AttendanceCreateWithoutScheduleInput } from './attendance-create-without-schedule.input';

@InputType()
export class AttendanceUpsertWithWhereUniqueWithoutScheduleInput {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;

    @Field(() => AttendanceUpdateWithoutScheduleInput, {nullable:false})
    update!: AttendanceUpdateWithoutScheduleInput;

    @Field(() => AttendanceCreateWithoutScheduleInput, {nullable:false})
    create!: AttendanceCreateWithoutScheduleInput;
}
