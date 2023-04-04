import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithoutClubInput } from './membership-fee-update-without-club.input';

@InputType()
export class MembershipFeeUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeUpdateWithoutClubInput, {nullable:false})
    data!: MembershipFeeUpdateWithoutClubInput;
}
