import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentScalarWhereInput } from './report-comment-scalar-where.input';
import { ReportCommentUpdateManyMutationInput } from './report-comment-update-many-mutation.input';

@InputType()
export class ReportCommentUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReportCommentScalarWhereInput, {nullable:false})
    where!: ReportCommentScalarWhereInput;

    @Field(() => ReportCommentUpdateManyMutationInput, {nullable:false})
    data!: ReportCommentUpdateManyMutationInput;
}
