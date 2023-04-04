import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutReportInput } from './schedule-create-without-report.input';
import { ScheduleCreateOrConnectWithoutReportInput } from './schedule-create-or-connect-without-report.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedOneWithoutReportInput {

    @Field(() => ScheduleCreateWithoutReportInput, {nullable:true})
    create?: ScheduleCreateWithoutReportInput;

    @Field(() => ScheduleCreateOrConnectWithoutReportInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutReportInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;
}
