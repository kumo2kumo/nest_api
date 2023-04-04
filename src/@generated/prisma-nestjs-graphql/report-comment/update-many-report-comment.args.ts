import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentUpdateManyMutationInput } from './report-comment-update-many-mutation.input';
import { ReportCommentWhereInput } from './report-comment-where.input';

@ArgsType()
export class UpdateManyReportCommentArgs {

    @Field(() => ReportCommentUpdateManyMutationInput, {nullable:false})
    data!: ReportCommentUpdateManyMutationInput;

    @Field(() => ReportCommentWhereInput, {nullable:true})
    where?: ReportCommentWhereInput;
}
