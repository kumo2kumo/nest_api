import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithoutUserInput } from './sled-comment-update-without-user.input';
import { SledCommentCreateWithoutUserInput } from './sled-comment-create-without-user.input';

@InputType()
export class SledCommentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentUpdateWithoutUserInput, {nullable:false})
    update!: SledCommentUpdateWithoutUserInput;

    @Field(() => SledCommentCreateWithoutUserInput, {nullable:false})
    create!: SledCommentCreateWithoutUserInput;
}
