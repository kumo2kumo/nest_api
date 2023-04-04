import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateWithoutUserInput } from './membership-fee-create-without-user.input';
import { MembershipFeeCreateOrConnectWithoutUserInput } from './membership-fee-create-or-connect-without-user.input';
import { MembershipFeeCreateManyUserInputEnvelope } from './membership-fee-create-many-user-input-envelope.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';

@InputType()
export class MembershipFeeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MembershipFeeCreateWithoutUserInput], {nullable:true})
    create?: Array<MembershipFeeCreateWithoutUserInput>;

    @Field(() => [MembershipFeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<MembershipFeeCreateOrConnectWithoutUserInput>;

    @Field(() => MembershipFeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: MembershipFeeCreateManyUserInputEnvelope;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    connect?: Array<MembershipFeeWhereUniqueInput>;
}
