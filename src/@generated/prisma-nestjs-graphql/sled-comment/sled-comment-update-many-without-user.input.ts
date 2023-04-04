import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutUserInput } from './sled-comment-create-without-user.input';
import { SledCommentCreateOrConnectWithoutUserInput } from './sled-comment-create-or-connect-without-user.input';
import { SledCommentUpsertWithWhereUniqueWithoutUserInput } from './sled-comment-upsert-with-where-unique-without-user.input';
import { SledCommentCreateManyUserInputEnvelope } from './sled-comment-create-many-user-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithWhereUniqueWithoutUserInput } from './sled-comment-update-with-where-unique-without-user.input';
import { SledCommentUpdateManyWithWhereWithoutUserInput } from './sled-comment-update-many-with-where-without-user.input';
import { SledCommentScalarWhereInput } from './sled-comment-scalar-where.input';

@InputType()
export class SledCommentUpdateManyWithoutUserInput {

    @Field(() => [SledCommentCreateWithoutUserInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutUserInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutUserInput>;

    @Field(() => [SledCommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<SledCommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SledCommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManyUserInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    set?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    delete?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<SledCommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SledCommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<SledCommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SledCommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<SledCommentScalarWhereInput>;
}
