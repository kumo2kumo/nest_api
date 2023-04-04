import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentCreateWithoutUpdateUserInput } from './sled-comment-create-without-update-user.input';

@InputType()
export class SledCommentCreateOrConnectWithoutUpdateUserInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentCreateWithoutUpdateUserInput, {nullable:false})
    create!: SledCommentCreateWithoutUpdateUserInput;
}
