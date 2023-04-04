import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentCreateManyInput } from './sled-comment-create-many.input';

@ArgsType()
export class CreateManySledCommentArgs {

    @Field(() => [SledCommentCreateManyInput], {nullable:false})
    data!: Array<SledCommentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
