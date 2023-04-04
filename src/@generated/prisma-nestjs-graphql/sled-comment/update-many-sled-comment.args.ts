import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentUpdateManyMutationInput } from './sled-comment-update-many-mutation.input';
import { SledCommentWhereInput } from './sled-comment-where.input';

@ArgsType()
export class UpdateManySledCommentArgs {

    @Field(() => SledCommentUpdateManyMutationInput, {nullable:false})
    data!: SledCommentUpdateManyMutationInput;

    @Field(() => SledCommentWhereInput, {nullable:true})
    where?: SledCommentWhereInput;
}
