import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutReportInput } from './schedule-create-without-report.input';

@InputType()
export class ScheduleCreateOrConnectWithoutReportInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutReportInput, {nullable:false})
    create!: ScheduleCreateWithoutReportInput;
}
