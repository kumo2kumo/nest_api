import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutAttendancesInput } from './schedule-create-without-attendances.input';
import { ScheduleCreateOrConnectWithoutAttendancesInput } from './schedule-create-or-connect-without-attendances.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedOneWithoutAttendancesInput {

    @Field(() => ScheduleCreateWithoutAttendancesInput, {nullable:true})
    create?: ScheduleCreateWithoutAttendancesInput;

    @Field(() => ScheduleCreateOrConnectWithoutAttendancesInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;
}
