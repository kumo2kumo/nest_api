import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportCreateWithoutScheduleInput } from './picture-report-create-without-schedule.input';

@InputType()
export class PictureReportCreateOrConnectWithoutScheduleInput {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportCreateWithoutScheduleInput, {nullable:false})
    create!: PictureReportCreateWithoutScheduleInput;
}
