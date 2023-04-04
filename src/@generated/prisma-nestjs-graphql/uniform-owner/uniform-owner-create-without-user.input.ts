import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutUniformOwnersInput } from '../club/club-create-nested-one-without-uniform-owners.input';

@InputType()
export class UniformOwnerCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutUniformOwnersInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutUniformOwnersInput;
}
