import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutReportInput } from './schedule-create-without-report.input';
import { ScheduleCreateOrConnectWithoutReportInput } from './schedule-create-or-connect-without-report.input';
import { ScheduleUpsertWithoutReportInput } from './schedule-upsert-without-report.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutReportInput } from './schedule-update-without-report.input';

@InputType()
export class ScheduleUpdateOneRequiredWithoutReportInput {

    @Field(() => ScheduleCreateWithoutReportInput, {nullable:true})
    create?: ScheduleCreateWithoutReportInput;

    @Field(() => ScheduleCreateOrConnectWithoutReportInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutReportInput;

    @Field(() => ScheduleUpsertWithoutReportInput, {nullable:true})
    upsert?: ScheduleUpsertWithoutReportInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutReportInput, {nullable:true})
    update?: ScheduleUpdateWithoutReportInput;
}
