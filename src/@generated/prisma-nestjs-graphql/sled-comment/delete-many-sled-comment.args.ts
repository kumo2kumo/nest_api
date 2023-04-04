import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentWhereInput } from './sled-comment-where.input';

@ArgsType()
export class DeleteManySledCommentArgs {

    @Field(() => SledCommentWhereInput, {nullable:true})
    where?: SledCommentWhereInput;
}
