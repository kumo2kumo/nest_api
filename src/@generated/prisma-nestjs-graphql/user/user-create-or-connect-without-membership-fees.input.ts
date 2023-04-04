import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMembershipFeesInput } from './user-create-without-membership-fees.input';

@InputType()
export class UserCreateOrConnectWithoutMembershipFeesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMembershipFeesInput, {nullable:false})
    create!: UserCreateWithoutMembershipFeesInput;
}
