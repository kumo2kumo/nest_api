import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithoutUpdateUserInput } from './sled-comment-update-without-update-user.input';
import { SledCommentCreateWithoutUpdateUserInput } from './sled-comment-create-without-update-user.input';

@InputType()
export class SledCommentUpsertWithWhereUniqueWithoutUpdateUserInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentUpdateWithoutUpdateUserInput, {nullable:false})
    update!: SledCommentUpdateWithoutUpdateUserInput;

    @Field(() => SledCommentCreateWithoutUpdateUserInput, {nullable:false})
    create!: SledCommentCreateWithoutUpdateUserInput;
}
