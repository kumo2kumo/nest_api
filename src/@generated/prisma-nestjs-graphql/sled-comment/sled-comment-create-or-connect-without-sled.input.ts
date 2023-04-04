import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentCreateWithoutSledInput } from './sled-comment-create-without-sled.input';

@InputType()
export class SledCommentCreateOrConnectWithoutSledInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentCreateWithoutSledInput, {nullable:false})
    create!: SledCommentCreateWithoutSledInput;
}
