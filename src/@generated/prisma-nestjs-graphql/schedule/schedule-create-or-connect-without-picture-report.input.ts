import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';
import { ScheduleCreateWithoutPictureReportInput } from './schedule-create-without-picture-report.input';

@InputType()
export class ScheduleCreateOrConnectWithoutPictureReportInput {

    @Field(() => ScheduleWhereUniqueInput, {nullable:false})
    where!: ScheduleWhereUniqueInput;

    @Field(() => ScheduleCreateWithoutPictureReportInput, {nullable:false})
    create!: ScheduleCreateWithoutPictureReportInput;
}
