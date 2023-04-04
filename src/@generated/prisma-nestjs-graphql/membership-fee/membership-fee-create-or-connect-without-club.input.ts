import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeCreateWithoutClubInput } from './membership-fee-create-without-club.input';

@InputType()
export class MembershipFeeCreateOrConnectWithoutClubInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeCreateWithoutClubInput, {nullable:false})
    create!: MembershipFeeCreateWithoutClubInput;
}
