import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SledCommentUncheckedCreateNestedManyWithoutSledInput } from '../sled-comment/sled-comment-unchecked-create-nested-many-without-sled.input';

@InputType()
export class SledUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    topic!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => SledCommentUncheckedCreateNestedManyWithoutSledInput, {nullable:true})
    sledComments?: SledCommentUncheckedCreateNestedManyWithoutSledInput;
}
