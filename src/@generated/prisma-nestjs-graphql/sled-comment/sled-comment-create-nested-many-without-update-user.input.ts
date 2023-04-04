import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateWithoutUpdateUserInput } from './sled-comment-create-without-update-user.input';
import { SledCommentCreateOrConnectWithoutUpdateUserInput } from './sled-comment-create-or-connect-without-update-user.input';
import { SledCommentCreateManyUpdateUserInputEnvelope } from './sled-comment-create-many-update-user-input-envelope.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';

@InputType()
export class SledCommentCreateNestedManyWithoutUpdateUserInput {

    @Field(() => [SledCommentCreateWithoutUpdateUserInput], {nullable:true})
    create?: Array<SledCommentCreateWithoutUpdateUserInput>;

    @Field(() => [SledCommentCreateOrConnectWithoutUpdateUserInput], {nullable:true})
    connectOrCreate?: Array<SledCommentCreateOrConnectWithoutUpdateUserInput>;

    @Field(() => SledCommentCreateManyUpdateUserInputEnvelope, {nullable:true})
    createMany?: SledCommentCreateManyUpdateUserInputEnvelope;

    @Field(() => [SledCommentWhereUniqueInput], {nullable:true})
    connect?: Array<SledCommentWhereUniqueInput>;
}
