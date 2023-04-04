import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithoutReportInput } from './report-comment-update-without-report.input';
import { ReportCommentCreateWithoutReportInput } from './report-comment-create-without-report.input';

@InputType()
export class ReportCommentUpsertWithWhereUniqueWithoutReportInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentUpdateWithoutReportInput, {nullable:false})
    update!: ReportCommentUpdateWithoutReportInput;

    @Field(() => ReportCommentCreateWithoutReportInput, {nullable:false})
    create!: ReportCommentCreateWithoutReportInput;
}
