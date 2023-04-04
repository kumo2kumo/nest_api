import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SledCommentCreateManyUpdateUserInput } from './sled-comment-create-many-update-user.input';

@InputType()
export class SledCommentCreateManyUpdateUserInputEnvelope {

    @Field(() => [SledCommentCreateManyUpdateUserInput], {nullable:false})
    data!: Array<SledCommentCreateManyUpdateUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
