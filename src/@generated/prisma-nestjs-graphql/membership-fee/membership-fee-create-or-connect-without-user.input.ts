import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeCreateWithoutUserInput } from './membership-fee-create-without-user.input';

@InputType()
export class MembershipFeeCreateOrConnectWithoutUserInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeCreateWithoutUserInput, {nullable:false})
    create!: MembershipFeeCreateWithoutUserInput;
}
