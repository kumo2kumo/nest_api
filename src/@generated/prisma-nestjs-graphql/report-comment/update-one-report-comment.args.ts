import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentUpdateInput } from './report-comment-update.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';

@ArgsType()
export class UpdateOneReportCommentArgs {

    @Field(() => ReportCommentUpdateInput, {nullable:false})
    data!: ReportCommentUpdateInput;

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;
}
