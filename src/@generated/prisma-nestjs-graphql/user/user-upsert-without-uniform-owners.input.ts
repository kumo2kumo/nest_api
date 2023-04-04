import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUniformOwnersInput } from './user-update-without-uniform-owners.input';
import { UserCreateWithoutUniformOwnersInput } from './user-create-without-uniform-owners.input';

@InputType()
export class UserUpsertWithoutUniformOwnersInput {

    @Field(() => UserUpdateWithoutUniformOwnersInput, {nullable:false})
    update!: UserUpdateWithoutUniformOwnersInput;

    @Field(() => UserCreateWithoutUniformOwnersInput, {nullable:false})
    create!: UserCreateWithoutUniformOwnersInput;
}
