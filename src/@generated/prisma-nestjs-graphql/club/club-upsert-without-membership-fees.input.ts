import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutMembershipFeesInput } from './club-update-without-membership-fees.input';
import { ClubCreateWithoutMembershipFeesInput } from './club-create-without-membership-fees.input';

@InputType()
export class ClubUpsertWithoutMembershipFeesInput {

    @Field(() => ClubUpdateWithoutMembershipFeesInput, {nullable:false})
    update!: ClubUpdateWithoutMembershipFeesInput;

    @Field(() => ClubCreateWithoutMembershipFeesInput, {nullable:false})
    create!: ClubCreateWithoutMembershipFeesInput;
}
