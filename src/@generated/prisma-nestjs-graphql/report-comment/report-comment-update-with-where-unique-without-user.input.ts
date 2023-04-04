import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithoutUserInput } from './report-comment-update-without-user.input';

@InputType()
export class ReportCommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentUpdateWithoutUserInput, {nullable:false})
    data!: ReportCommentUpdateWithoutUserInput;
}
