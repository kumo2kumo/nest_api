import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMembershipFeesInput } from './user-create-without-membership-fees.input';
import { UserCreateOrConnectWithoutMembershipFeesInput } from './user-create-or-connect-without-membership-fees.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMembershipFeesInput {

    @Field(() => UserCreateWithoutMembershipFeesInput, {nullable:true})
    create?: UserCreateWithoutMembershipFeesInput;

    @Field(() => UserCreateOrConnectWithoutMembershipFeesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutMembershipFeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
