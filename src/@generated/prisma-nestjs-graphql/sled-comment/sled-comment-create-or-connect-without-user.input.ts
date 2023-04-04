import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentCreateWithoutUserInput } from './sled-comment-create-without-user.input';

@InputType()
export class SledCommentCreateOrConnectWithoutUserInput {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentCreateWithoutUserInput, {nullable:false})
    create!: SledCommentCreateWithoutUserInput;
}
