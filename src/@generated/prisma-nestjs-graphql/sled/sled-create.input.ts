import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ClubCreateNestedOneWithoutSledsInput } from '../club/club-create-nested-one-without-sleds.input';
import { SledCommentCreateNestedManyWithoutSledInput } from '../sled-comment/sled-comment-create-nested-many-without-sled.input';

@InputType()
export class SledCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    topic!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutSledsInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutSledsInput;

    @Field(() => SledCommentCreateNestedManyWithoutSledInput, {nullable:true})
    sledComments?: SledCommentCreateNestedManyWithoutSledInput;
}
