import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutScheduleInput } from './picture-report-create-without-schedule.input';
import { PictureReportCreateOrConnectWithoutScheduleInput } from './picture-report-create-or-connect-without-schedule.input';
import { PictureReportUpsertWithoutScheduleInput } from './picture-report-upsert-without-schedule.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportUpdateWithoutScheduleInput } from './picture-report-update-without-schedule.input';

@InputType()
export class PictureReportUpdateOneWithoutScheduleInput {

    @Field(() => PictureReportCreateWithoutScheduleInput, {nullable:true})
    create?: PictureReportCreateWithoutScheduleInput;

    @Field(() => PictureReportCreateOrConnectWithoutScheduleInput, {nullable:true})
    connectOrCreate?: PictureReportCreateOrConnectWithoutScheduleInput;

    @Field(() => PictureReportUpsertWithoutScheduleInput, {nullable:true})
    upsert?: PictureReportUpsertWithoutScheduleInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    connect?: PictureReportWhereUniqueInput;

    @Field(() => PictureReportUpdateWithoutScheduleInput, {nullable:true})
    update?: PictureReportUpdateWithoutScheduleInput;
}
