import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithoutUserInput } from './membership-fee-update-without-user.input';
import { MembershipFeeCreateWithoutUserInput } from './membership-fee-create-without-user.input';

@InputType()
export class MembershipFeeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:false})
    where!: MembershipFeeWhereUniqueInput;

    @Field(() => MembershipFeeUpdateWithoutUserInput, {nullable:false})
    update!: MembershipFeeUpdateWithoutUserInput;

    @Field(() => MembershipFeeCreateWithoutUserInput, {nullable:false})
    create!: MembershipFeeCreateWithoutUserInput;
}
