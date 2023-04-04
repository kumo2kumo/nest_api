import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithoutClubInput } from './membership-fee-update-without-club.input';
import { MembershipFeeCreateWithoutClubInput } from './membership-fee-create-without-club.input';

@InputType()
export class MembershipFeeUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeUpdateWithoutClubInput, {nullable:false})
    update!: MembershipFeeUpdateWithoutClubInput;

    @Field(() => MembershipFeeCreateWithoutClubInput, {nullable:false})
    create!: MembershipFeeCreateWithoutClubInput;
}
