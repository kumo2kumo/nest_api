import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutSledInput } from './sled-comment-create-without-sled.input';
import { SledCommentCreateOrConnectWithoutSledInput } from './sled-comment-create-or-connect-without-sled.input';
import { SledCommentCreateManySledInputEnvelope } from './sled-comment-create-many-sled-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';

@InputType()
export class SledCommentCreateNestedManyWithoutSledInput {

    @Field(() => [SledCommentCreateWithoutSledInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutSledInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutSledInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutSledInput>;

    @Field(() => SledCommentCreateManySledInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManySledInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;
}
