import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportUpdateWithoutScheduleInput } from './picture-report-update-without-schedule.input';
import { PictureReportCreateWithoutScheduleInput } from './picture-report-create-without-schedule.input';

@InputType()
export class PictureReportUpsertWithoutScheduleInput {

    @Field(() => PictureReportUpdateWithoutScheduleInput, {nullable:false})
    update!: PictureReportUpdateWithoutScheduleInput;

    @Field(() => PictureReportCreateWithoutScheduleInput, {nullable:false})
    create!: PictureReportCreateWithoutScheduleInput;
}
