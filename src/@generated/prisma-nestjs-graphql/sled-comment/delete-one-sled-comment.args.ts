import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';

@ArgsType()
export class DeleteOneSledCommentArgs {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;
}
