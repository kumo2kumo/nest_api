import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutSledInput } from './sled-comment-create-without-sled.input';
import { SledCommentCreateOrConnectWithoutSledInput } from './sled-comment-create-or-connect-without-sled.input';
import { SledCommentUpsertWithWhereUniqueWithoutSledInput } from './sled-comment-upsert-with-where-unique-without-sled.input';
import { SledCommentCreateManySledInputEnvelope } from './sled-comment-create-many-sled-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithWhereUniqueWithoutSledInput } from './sled-comment-update-with-where-unique-without-sled.input';
import { SledCommentUpdateManyWithWhereWithoutSledInput } from './sled-comment-update-many-with-where-without-sled.input';
import { SledCommentScalarWhereInput } from './sled-comment-scalar-where.input';

@InputType()
export class SledCommentUncheckedUpdateManyWithoutSledInput {

    @Field(() => [SledCommentCreateWithoutSledInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutSledInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutSledInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutSledInput>;

    @Field(() => [SledCommentUpsertWithWhereUniqueWithoutSledInput], {nullable:true})
    upsert?: Array<SledCommentUpsertWithWhereUniqueWithoutSledInput>;

    @Field(() => SledCommentCreateManySledInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManySledInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    set?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    delete?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;

    @Field(() => [SledCommentUpdateWithWhereUniqueWithoutSledInput], {nullable:true})
    update?: Array<SledCommentUpdateWithWhereUniqueWithoutSledInput>;

    @Field(() => [SledCommentUpdateManyWithWhereWithoutSledInput], {nullable:true})
    updateMany?: Array<SledCommentUpdateManyWithWhereWithoutSledInput>;

    @Field(() => [SledCommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<SledCommentScalarWhereInput>;
}
