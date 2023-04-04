import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithoutSledInput } from './sled-comment-update-without-sled.input';

@InputType()
export class SledCommentUpdateWithWhereUniqueWithoutSledInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentUpdateWithoutSledInput, {nullable:false})
    data!: SledCommentUpdateWithoutSledInput;
}
