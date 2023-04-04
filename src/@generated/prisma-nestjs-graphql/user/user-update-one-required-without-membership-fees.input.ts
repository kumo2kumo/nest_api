import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMembershipFeesInput } from './user-create-without-membership-fees.input';
import { UserCreateOrConnectWithoutMembershipFeesInput } from './user-create-or-connect-without-membership-fees.input';
import { UserUpsertWithoutMembershipFeesInput } from './user-upsert-without-membership-fees.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMembershipFeesInput } from './user-update-without-membership-fees.input';

@InputType()
export class UserUpdateOneRequiredWithoutMembershipFeesInput {

    @Field(() => UserCreateWithoutMembershipFeesInput, {nullable:true})
    create?: UserCreateWithoutMembershipFeesInput;

    @Field(() => UserCreateOrConnectWithoutMembershipFeesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutMembershipFeesInput;

    @Field(() => UserUpsertWithoutMembershipFeesInput, {nullable:true})
    upsert?: UserUpsertWithoutMembershipFeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMembershipFeesInput, {nullable:true})
    update?: UserUpdateWithoutMembershipFeesInput;
}
