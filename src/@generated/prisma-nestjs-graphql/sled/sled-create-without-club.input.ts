import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SledCommentCreateNestedManyWithoutSledInput } from '../sled-comment/sled-comment-create-nested-many-without-sled.input';

@InputType()
export class SledCreateWithoutClubInput {

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    topic!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SledCommentCreateNestedManyWithoutSledInput, {nullable:true})
    sledComments?: SledCommentCreateNestedManyWithoutSledInput;
}
