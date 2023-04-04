import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentCreateWithoutReportInput } from './report-comment-create-without-report.input';

@InputType()
export class ReportCommentCreateOrConnectWithoutReportInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentCreateWithoutReportInput, {nullable:false})
    create!: ReportCommentCreateWithoutReportInput;
}
