import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithoutUserInput } from './sled-comment-update-without-user.input';

@InputType()
export class SledCommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentUpdateWithoutUserInput, {nullable:false})
    data!: SledCommentUpdateWithoutUserInput;
}
