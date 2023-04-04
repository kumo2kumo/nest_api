import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithoutUserInput } from './membership-fee-update-without-user.input';

@InputType()
export class MembershipFeeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeUpdateWithoutUserInput, {nullable:false})
    data!: MembershipFeeUpdateWithoutUserInput;
}
