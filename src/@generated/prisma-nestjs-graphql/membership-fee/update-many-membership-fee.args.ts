import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeUpdateManyMutationInput } from './membership-fee-update-many-mutation.input';
import { MembershipFeeWhereInput } from './membership-fee-where.input';

@ArgsType()
export class UpdateManyMembershipFeeArgs {

    @Field(() => MembershipFeeUpdateManyMutationInput, {nullable:false})
    data!: MembershipFeeUpdateManyMutationInput;

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    where?: MembershipFeeWhereInput;
}
