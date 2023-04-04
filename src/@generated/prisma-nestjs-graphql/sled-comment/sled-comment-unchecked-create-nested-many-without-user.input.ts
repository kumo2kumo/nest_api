import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutUserInput } from './sled-comment-create-without-user.input';
import { SledCommentCreateOrConnectWithoutUserInput } from './sled-comment-create-or-connect-without-user.input';
import { SledCommentCreateManyUserInputEnvelope } from './sled-comment-create-many-user-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';

@InputType()
export class SledCommentUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [SledCommentCreateWithoutUserInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutUserInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutUserInput>;

    @Field(() => SledCommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManyUserInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;
}
