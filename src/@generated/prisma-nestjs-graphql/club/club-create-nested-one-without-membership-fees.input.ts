import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembershipFeesInput } from './club-create-without-membership-fees.input';
import { ClubCreateOrConnectWithoutMembershipFeesInput } from './club-create-or-connect-without-membership-fees.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutMembershipFeesInput {

    @Field(() => ClubCreateWithoutMembershipFeesInput, {nullable:true})
    create?: ClubCreateWithoutMembershipFeesInput;

    @Field(() => ClubCreateOrConnectWithoutMembershipFeesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutMembershipFeesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
