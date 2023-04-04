import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentCreateWithoutUserInput } from './report-comment-create-without-user.input';

@InputType()
export class ReportCommentCreateOrConnectWithoutUserInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentCreateWithoutUserInput, {nullable:false})
    create!: ReportCommentCreateWithoutUserInput;
}
