import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleUpdateWithoutPictureReportInput } from './schedule-update-without-picture-report.input';
import { ScheduleCreateWithoutPictureReportInput } from './schedule-create-without-picture-report.input';

@InputType()
export class ScheduleUpsertWithoutPictureReportInput {

    @Field(() => ScheduleUpdateWithoutPictureReportInput, {nullable:false})
    update!: ScheduleUpdateWithoutPictureReportInput;

    @Field(() => ScheduleCreateWithoutPictureReportInput, {nullable:false})
    create!: ScheduleCreateWithoutPictureReportInput;
}
