import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';

@ArgsType()
export class DeleteOneMembershipFeeArgs {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;
}
