import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPostSledCommentsInput } from './user-update-without-post-sled-comments.input';
import { UserCreateWithoutPostSledCommentsInput } from './user-create-without-post-sled-comments.input';

@InputType()
export class UserUpsertWithoutPostSledCommentsInput {

    @Field(() => UserUpdateWithoutPostSledCommentsInput, {nullable:false})
    update!: UserUpdateWithoutPostSledCommentsInput;

    @Field(() => UserCreateWithoutPostSledCommentsInput, {nullable:false})
    create!: UserCreateWithoutPostSledCommentsInput;
}
