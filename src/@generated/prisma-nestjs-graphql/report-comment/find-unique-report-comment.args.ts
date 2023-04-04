import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';

@ArgsType()
export class FindUniqueReportCommentArgs {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;
}
