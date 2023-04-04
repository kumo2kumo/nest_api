import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleUpdateWithoutReportInput } from './schedule-update-without-report.input';
import { ScheduleCreateWithoutReportInput } from './schedule-create-without-report.input';

@InputType()
export class ScheduleUpsertWithoutReportInput {

    @Field(() => ScheduleUpdateWithoutReportInput, {nullable:false})
    update!: ScheduleUpdateWithoutReportInput;

    @Field(() => ScheduleCreateWithoutReportInput, {nullable:false})
    create!: ScheduleCreateWithoutReportInput;
}
