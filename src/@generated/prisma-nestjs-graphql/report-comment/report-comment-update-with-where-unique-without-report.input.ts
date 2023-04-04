import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithoutReportInput } from './report-comment-update-without-report.input';

@InputType()
export class ReportCommentUpdateWithWhereUniqueWithoutReportInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentUpdateWithoutReportInput, {nullable:false})
    data!: ReportCommentUpdateWithoutReportInput;
}
