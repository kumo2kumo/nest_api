import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentCreateInput } from './report-comment-create.input';
import { ReportCommentUpdateInput } from './report-comment-update.input';

@ArgsType()
export class UpsertOneReportCommentArgs {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentCreateInput, {nullable:false})
    create!: ReportCommentCreateInput;

    @Field(() => ReportCommentUpdateInput, {nullable:false})
    update!: ReportCommentUpdateInput;
}
