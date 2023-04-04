import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeCreateInput } from './membership-fee-create.input';
import { MembershipFeeUpdateInput } from './membership-fee-update.input';

@ArgsType()
export class UpsertOneMembershipFeeArgs {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeCreateInput, {nullable:false})
    create!: MembershipFeeCreateInput;

    @Field(() => MembershipFeeUpdateInput, {nullable:false})
    update!: MembershipFeeUpdateInput;
}
