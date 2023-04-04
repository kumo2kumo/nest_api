import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUpdateSledCommentsInput } from './user-update-without-update-sled-comments.input';
import { UserCreateWithoutUpdateSledCommentsInput } from './user-create-without-update-sled-comments.input';

@InputType()
export class UserUpsertWithoutUpdateSledCommentsInput {

    @Field(() => UserUpdateWithoutUpdateSledCommentsInput, {nullable:false})
    update!: UserUpdateWithoutUpdateSledCommentsInput;

    @Field(() => UserCreateWithoutUpdateSledCommentsInput, {nullable:false})
    create!: UserCreateWithoutUpdateSledCommentsInput;
}
