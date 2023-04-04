import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutToolsInput } from './user-update-without-tools.input';
import { UserCreateWithoutToolsInput } from './user-create-without-tools.input';

@InputType()
export class UserUpsertWithoutToolsInput {

    @Field(() => UserUpdateWithoutToolsInput, {nullable:false})
    update!: UserUpdateWithoutToolsInput;

    @Field(() => UserCreateWithoutToolsInput, {nullable:false})
    create!: UserCreateWithoutToolsInput;
}
