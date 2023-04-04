import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateWithoutUserInput } from './report-comment-create-without-user.input';
import { ReportCommentCreateOrConnectWithoutUserInput } from './report-comment-create-or-connect-without-user.input';
import { ReportCommentUpsertWithWhereUniqueWithoutUserInput } from './report-comment-upsert-with-where-unique-without-user.input';
import { ReportCommentCreateManyUserInputEnvelope } from './report-comment-create-many-user-input-envelope.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithWhereUniqueWithoutUserInput } from './report-comment-update-with-where-unique-without-user.input';
import { ReportCommentUpdateManyWithWhereWithoutUserInput } from './report-comment-update-many-with-where-without-user.input';
import { ReportCommentScalarWhereInput } from './report-comment-scalar-where.input';

@InputType()
export class ReportCommentUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ReportCommentCreateWithoutUserInput], {nullable:true})
    create?: Array<ReportCommentCreateWithoutUserInput>;

    @Field(() => [ReportCommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReportCommentCreateOrConnectWithoutUserInput>;

    @Field(() => [ReportCommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReportCommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReportCommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReportCommentCreateManyUserInputEnvelope;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    set?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    delete?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    connect?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReportCommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReportCommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReportCommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReportCommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportCommentScalarWhereInput>;
}
