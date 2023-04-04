import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentWhereInput } from './report-comment-where.input';

@ArgsType()
export class DeleteManyReportCommentArgs {

    @Field(() => ReportCommentWhereInput, {nullable:true})
    where?: ReportCommentWhereInput;
}
