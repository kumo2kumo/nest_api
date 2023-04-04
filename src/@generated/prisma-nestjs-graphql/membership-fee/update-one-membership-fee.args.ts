import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeUpdateInput } from './membership-fee-update.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';

@ArgsType()
export class UpdateOneMembershipFeeArgs {

    @Field(() => MembershipFeeUpdateInput, {nullable:false})
    data!: MembershipFeeUpdateInput;

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;
}
