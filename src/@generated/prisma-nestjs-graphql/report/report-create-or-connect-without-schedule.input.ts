import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutScheduleInput } from './report-create-without-schedule.input';

@InputType()
export class ReportCreateOrConnectWithoutScheduleInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutScheduleInput, {nullable:false})
    create!: ReportCreateWithoutScheduleInput;
}
