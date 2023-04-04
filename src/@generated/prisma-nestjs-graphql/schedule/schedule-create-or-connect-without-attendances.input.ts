import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutAttendancesInput } from './schedule-create-without-attendances.input';

@InputType()
export class ScheduleCreateOrConnectWithoutAttendancesInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutAttendancesInput, {nullable:false})
    create!: ScheduleCreateWithoutAttendancesInput;
}
