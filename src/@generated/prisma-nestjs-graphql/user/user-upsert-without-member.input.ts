import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemberInput } from './user-update-without-member.input';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';

@InputType()
export class UserUpsertWithoutMemberInput {

    @Field(() => UserUpdateWithoutMemberInput, {nullable:false})
    update!: UserUpdateWithoutMemberInput;

    @Field(() => UserCreateWithoutMemberInput, {nullable:false})
    create!: UserCreateWithoutMemberInput;
}
