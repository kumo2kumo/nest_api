import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutPictureReportInput } from './schedule-create-without-picture-report.input';
import { ScheduleCreateOrConnectWithoutPictureReportInput } from './schedule-create-or-connect-without-picture-report.input';
import { ScheduleUpsertWithoutPictureReportInput } from './schedule-upsert-without-picture-report.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleUpdateWithoutPictureReportInput } from './schedule-update-without-picture-report.input';

@InputType()
export class ScheduleUpdateOneRequiredWithoutPictureReportInput {

    @Field(() => ScheduleCreateWithoutPictureReportInput, {nullable:true})
    create?: ScheduleCreateWithoutPictureReportInput;

    @Field(() => ScheduleCreateOrConnectWithoutPictureReportInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutPictureReportInput;

    @Field(() => ScheduleUpsertWithoutPictureReportInput, {nullable:true})
    upsert?: ScheduleUpsertWithoutPictureReportInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;

    @Field(() => ScheduleUpdateWithoutPictureReportInput, {nullable:true})
    update?: ScheduleUpdateWithoutPictureReportInput;
}
