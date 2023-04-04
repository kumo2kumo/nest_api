import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateManyUserInput } from './sled-comment-create-many-user.input';

@InputType()
export class SledCommentCreateManyUserInputEnvelope {

    @Field(() => [SledCommentCreateManyUserInput], {nullable:false})
    data!: Array<SledCommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
