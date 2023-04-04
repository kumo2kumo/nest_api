import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportUpdateWithoutScheduleInput } from './report-update-without-schedule.input';
import { ReportCreateWithoutScheduleInput } from './report-create-without-schedule.input';

@InputType()
export class ReportUpsertWithoutScheduleInput {

    @Field(() => ReportUpdateWithoutScheduleInput, {nullable:false})
    update!: ReportUpdateWithoutScheduleInput;

    @Field(() => ReportCreateWithoutScheduleInput, {nullable:false})
    create!: ReportCreateWithoutScheduleInput;
}
