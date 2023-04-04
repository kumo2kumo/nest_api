import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeScalarWhereInput } from './membership-fee-scalar-where.input';
import { MembershipFeeUpdateManyMutationInput } from './membership-fee-update-many-mutation.input';

@InputType()
export class MembershipFeeUpdateManyWithWhereWithoutClubInput {

    @Field(() => MembershipFeeScalarWhereInput, {nullable:false})
    where!: MembershipFeeScalarWhereInput;

    @Field(() => MembershipFeeUpdateManyMutationInput, {nullable:false})
    data!: MembershipFeeUpdateManyMutationInput;
}
