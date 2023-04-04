import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutScheduleInput } from './report-create-without-schedule.input';
import { ReportCreateOrConnectWithoutScheduleInput } from './report-create-or-connect-without-schedule.input';
import { ReportUpsertWithoutScheduleInput } from './report-upsert-without-schedule.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutScheduleInput } from './report-update-without-schedule.input';

@InputType()
export class ReportUncheckedUpdateOneWithoutScheduleInput {

    @Field(() => ReportCreateWithoutScheduleInput, {nullable:true})
    create?: ReportCreateWithoutScheduleInput;

    @Field(() => ReportCreateOrConnectWithoutScheduleInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutScheduleInput;

    @Field(() => ReportUpsertWithoutScheduleInput, {nullable:true})
    upsert?: ReportUpsertWithoutScheduleInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutScheduleInput, {nullable:true})
    update?: ReportUpdateWithoutScheduleInput;
}
