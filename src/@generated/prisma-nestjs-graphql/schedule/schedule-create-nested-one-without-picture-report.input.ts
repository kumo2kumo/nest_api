import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScheduleCreateWithoutPictureReportInput } from './schedule-create-without-picture-report.input';
import { ScheduleCreateOrConnectWithoutPictureReportInput } from './schedule-create-or-connect-without-picture-report.input';
import { ScheduleWhereUniqueInput } from './schedule-where-unique.input';

@InputType()
export class ScheduleCreateNestedOneWithoutPictureReportInput {

    @Field(() => ScheduleCreateWithoutPictureReportInput, {nullable:true})
    create?: ScheduleCreateWithoutPictureReportInput;

    @Field(() => ScheduleCreateOrConnectWithoutPictureReportInput, {nullable:true})
    connectOrCreate?: ScheduleCreateOrConnectWithoutPictureReportInput;

    @Field(() => ScheduleWhereUniqueInput, {nullable:true})
    connect?: ScheduleWhereUniqueInput;
}
