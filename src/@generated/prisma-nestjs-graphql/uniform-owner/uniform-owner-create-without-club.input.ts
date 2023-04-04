import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUniformOwnersInput } from '../user/user-create-nested-one-without-uniform-owners.input';

@InputType()
export class UniformOwnerCreateWithoutClubInput {

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUniformOwnersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUniformOwnersInput;
}
