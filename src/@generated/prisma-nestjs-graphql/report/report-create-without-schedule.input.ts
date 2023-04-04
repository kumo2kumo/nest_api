import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutReportsInput } from '../club/club-create-nested-one-without-reports.input';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';
import { ReportCommentCreateNestedManyWithoutReportInput } from '../report-comment/report-comment-create-nested-many-without-report.input';

@InputType()
export class ReportCreateWithoutScheduleInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutReportsInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutReportsInput;

    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:false})
    uploadUser!: UserCreateNestedOneWithoutReportsInput;

    @Field(() => ReportCommentCreateNestedManyWithoutReportInput, {nullable:true})
    reportComments?: ReportCommentCreateNestedManyWithoutReportInput;
}
