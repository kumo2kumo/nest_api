import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithoutUserInput } from './report-comment-update-without-user.input';
import { ReportCommentCreateWithoutUserInput } from './report-comment-create-without-user.input';

@InputType()
export class ReportCommentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReportCommentWhereUniqueInput, {nullable:false})
    where!: ReportCommentWhereUniqueInput;

    @Field(() => ReportCommentUpdateWithoutUserInput, {nullable:false})
    update!: ReportCommentUpdateWithoutUserInput;

    @Field(() => ReportCommentCreateWithoutUserInput, {nullable:false})
    create!: ReportCommentCreateWithoutUserInput;
}
