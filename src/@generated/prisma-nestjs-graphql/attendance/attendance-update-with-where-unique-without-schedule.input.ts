import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceUpdateWithoutScheduleInput } from './attendance-update-without-schedule.input';

@InputType()
export class AttendanceUpdateWithWhereUniqueWithoutScheduleInput {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;

    @Field(() => AttendanceUpdateWithoutScheduleInput, {nullable:false})
    data!: AttendanceUpdateWithoutScheduleInput;
}
