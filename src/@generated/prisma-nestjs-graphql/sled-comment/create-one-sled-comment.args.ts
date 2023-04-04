import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentCreateInput } from './sled-comment-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSledCommentArgs {

    @Field(() => SledCommentCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => SledCommentCreateInput)
    data!: SledCommentCreateInput;
}
