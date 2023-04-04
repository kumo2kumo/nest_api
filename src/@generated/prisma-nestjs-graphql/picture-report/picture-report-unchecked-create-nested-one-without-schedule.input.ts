import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportCreateWithoutScheduleInput } from './picture-report-create-without-schedule.input';
import { PictureReportCreateOrConnectWithoutScheduleInput } from './picture-report-create-or-connect-without-schedule.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@InputType()
export class PictureReportUncheckedCreateNestedOneWithoutScheduleInput {

    @Field(() => PictureReportCreateWithoutScheduleInput, {nullable:true})
    create?: PictureReportCreateWithoutScheduleInput;

    @Field(() => PictureReportCreateOrConnectWithoutScheduleInput, {nullable:true})
    connectOrCreate?: PictureReportCreateOrConnectWithoutScheduleInput;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    connect?: PictureReportWhereUniqueInput;
}
