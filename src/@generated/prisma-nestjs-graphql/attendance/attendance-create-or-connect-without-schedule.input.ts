import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttendanceWhereUniqueInput } from './attendance-where-unique.input';
import { AttendanceCreateWithoutScheduleInput } from './attendance-create-without-schedule.input';

@InputType()
export class AttendanceCreateOrConnectWithoutScheduleInput {

    @Field(() => AttendanceWhereUniqueInput, {nullable:false})
    where!: AttendanceWhereUniqueInput;

    @Field(() => AttendanceCreateWithoutScheduleInput, {nullable:false})
    create!: AttendanceCreateWithoutScheduleInput;
}
