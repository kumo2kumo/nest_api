import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportCommentUncheckedCreateNestedManyWithoutReportInput } from '../report-comment/report-comment-unchecked-create-nested-many-without-report.input';

@InputType()
export class ReportUncheckedCreateWithoutScheduleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:false})
    uploadUserId!: number;

    @Field(() => ReportCommentUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    reportComments?: ReportCommentUncheckedCreateNestedManyWithoutReportInput;
}
