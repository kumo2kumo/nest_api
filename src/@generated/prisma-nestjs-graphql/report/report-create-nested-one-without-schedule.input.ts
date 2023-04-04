import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutScheduleInput } from './report-create-without-schedule.input';
import { ReportCreateOrConnectWithoutScheduleInput } from './report-create-or-connect-without-schedule.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedOneWithoutScheduleInput {

    @Field(() => ReportCreateWithoutScheduleInput, {nullable:true})
    create?: ReportCreateWithoutScheduleInput;

    @Field(() => ReportCreateOrConnectWithoutScheduleInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutScheduleInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;
}
