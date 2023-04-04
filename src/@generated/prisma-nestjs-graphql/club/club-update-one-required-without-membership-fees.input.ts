import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembershipFeesInput } from './club-create-without-membership-fees.input';
import { ClubCreateOrConnectWithoutMembershipFeesInput } from './club-create-or-connect-without-membership-fees.input';
import { ClubUpsertWithoutMembershipFeesInput } from './club-upsert-without-membership-fees.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutMembershipFeesInput } from './club-update-without-membership-fees.input';

@InputType()
export class ClubUpdateOneRequiredWithoutMembershipFeesInput {

    @Field(() => ClubCreateWithoutMembershipFeesInput, {nullable:true})
    create?: ClubCreateWithoutMembershipFeesInput;

    @Field(() => ClubCreateOrConnectWithoutMembershipFeesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutMembershipFeesInput;

    @Field(() => ClubUpsertWithoutMembershipFeesInput, {nullable:true})
    upsert?: ClubUpsertWithoutMembershipFeesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutMembershipFeesInput, {nullable:true})
    update?: ClubUpdateWithoutMembershipFeesInput;
}
