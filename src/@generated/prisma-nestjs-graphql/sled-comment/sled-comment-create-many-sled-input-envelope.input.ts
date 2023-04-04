import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateManySledInput } from './sled-comment-create-many-sled.input';

@InputType()
export class SledCommentCreateManySledInputEnvelope {

    @Field(() => [SledCommentCreateManySledInput], {nullable:false})
    data!: Array<SledCommentCreateManySledInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
