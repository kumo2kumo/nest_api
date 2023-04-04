import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateWithoutClubInput } from './membership-fee-create-without-club.input';
import { MembershipFeeCreateOrConnectWithoutClubInput } from './membership-fee-create-or-connect-without-club.input';
import { MembershipFeeCreateManyClubInputEnvelope } from './membership-fee-create-many-club-input-envelope.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';

@InputType()
export class MembershipFeeUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [MembershipFeeCreateWithoutClubInput], {nullable:true})
    create?: Array<MembershipFeeCreateWithoutClubInput>;

    @Field(() => [MembershipFeeCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<MembershipFeeCreateOrConnectWithoutClubInput>;

    @Field(() => MembershipFeeCreateManyClubInputEnvelope, {nullable:true})
    createMany?: MembershipFeeCreateManyClubInputEnvelope;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    connect?: Array<MembershipFeeWhereUniqueInput>;
}
