import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentUpdateInput } from './sled-comment-update.input';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';

@ArgsType()
export class UpdateOneSledCommentArgs {

    @Field(() => SledCommentUpdateInput, {nullable:false})
    data!: SledCommentUpdateInput;

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;
}
