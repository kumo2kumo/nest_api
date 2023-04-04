import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentWhereUniqueInput } from './sled-comment-where-unique.input';
import { SledCommentCreateInput } from './sled-comment-create.input';
import { SledCommentUpdateInput } from './sled-comment-update.input';

@ArgsType()
export class UpsertOneSledCommentArgs {

    @Field(() => SledCommentWhereUniqueInput, {nullable:false})
    where!: SledCommentWhereUniqueInput;

    @Field(() => SledCommentCreateInput, {nullable:false})
    create!: SledCommentCreateInput;

    @Field(() => SledCommentUpdateInput, {nullable:false})
    update!: SledCommentUpdateInput;
}
