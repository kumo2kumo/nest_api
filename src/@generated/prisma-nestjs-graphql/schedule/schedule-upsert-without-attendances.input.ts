import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleUpdateWithoutAttendancesInput } from './schedule-update-without-attendances.input';
import { ScheduleCreateWithoutAttendancesInput } from './schedule-create-without-attendances.input';

@InputType()
export class ScheduleUpsertWithoutAttendancesInput {

    @Field(() => ScheduleUpdateWithoutAttendancesInput, {nullable:false})
    update!: ScheduleUpdateWithoutAttendancesInput;

    @Field(() => ScheduleCreateWithoutAttendancesInput, {nullable:false})
    create!: ScheduleCreateWithoutAttendancesInput;
}
