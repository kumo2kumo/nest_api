import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutAttendancesInput } from './schedule-create-without-attendances.input';
import { ScheduleCreateOrConnectWithoutAttendancesInput } from './schedule-create-or-connect-without-attendances.input';
import { ScheduleUpsertWithoutAttendancesInput } from './schedule-upsert-without-attendances.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutAttendancesInput } from './schedule-update-without-attendances.input';

@InputType()
export class ScheduleUpdateOneRequiredWithoutAttendancesInput {

    @Field(() => ScheduleCreateWithoutAttendancesInput, {nullable:true})
    create?: ScheduleCreateWithoutAttendancesInput;

    @Field(() => ScheduleCreateOrConnectWithoutAttendancesInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput;

    @Field(() => ScheduleUpsertWithoutAttendancesInput, {nullable:true})
    upsert?: ScheduleUpsertWithoutAttendancesInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutAttendancesInput, {nullable:true})
    update?: ScheduleUpdateWithoutAttendancesInput;
}
