import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateWithoutUserInput } from './report-comment-create-without-user.input';
import { ReportCommentCreateOrConnectWithoutUserInput } from './report-comment-create-or-connect-without-user.input';
import { ReportCommentCreateManyUserInputEnvelope } from './report-comment-create-many-user-input-envelope.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';

@InputType()
export class ReportCommentCreateNestedManyWithoutUserInput {

    @Field(() => [ReportCommentCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCommentCreateWithoutUserInput>;

    @Field(() => [ReportCommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCommentCreateOrConnectWithoutUserInput>;

    @Field(() => ReportCommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReportCommentCreateManyUserInputEnvelope;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    connect?: Array<ReportCommentWhereUniqueInput>;
}
