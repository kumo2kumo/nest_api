import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentUpdateWithoutSledInput } from './sled-comment-update-without-sled.input';
import { SledCommentCreateWithoutSledInput } from './sled-comment-create-without-sled.input';

@InputType()
export class SledCommentUpsertWithWhereUniqueWithoutSledInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentUpdateWithoutSledInput, {nullable:false})
    update!: SledCommentUpdateWithoutSledInput;

    @Field(() => SledCommentCreateWithoutSledInput, {nullable:false})
    create!: SledCommentCreateWithoutSledInput;
}
