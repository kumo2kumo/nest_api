import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentScalarWhereInput } from './sled-comment-scalar-where.input';
import { SledCommentUpdateManyMutationInput } from './sled-comment-update-many-mutation.input';

@InputType()
export class SledCommentUpdateManyWithWhereWithoutUpdateUserInput {

    @Field(() => SledCommentScalarWhereInput, {nullable:false})
    where!: SledCommentScalarWhereInput;

    @Field(() => SledCommentUpdateManyMutationInput, {nullable:false})
    data!: SledCommentUpdateManyMutationInput;
}
