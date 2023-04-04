import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMembershipFeesInput } from './user-update-without-membership-fees.input';
import { UserCreateWithoutMembershipFeesInput } from './user-create-without-membership-fees.input';

@InputType()
export class UserUpsertWithoutMembershipFeesInput {

    @Field(() => UserUpdateWithoutMembershipFeesInput, {nullable:false})
    update!: UserUpdateWithoutMembershipFeesInput;

    @Field(() => UserCreateWithoutMembershipFeesInput, {nullable:false})
    create!: UserCreateWithoutMembershipFeesInput;
}
