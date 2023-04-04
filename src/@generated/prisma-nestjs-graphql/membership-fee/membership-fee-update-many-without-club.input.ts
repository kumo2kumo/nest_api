import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateWithoutClubInput } from './membership-fee-create-without-club.input';
import { MembershipFeeCreateOrConnectWithoutClubInput } from './membership-fee-create-or-connect-without-club.input';
import { MembershipFeeUpsertWithWhereUniqueWithoutClubInput } from './membership-fee-upsert-with-where-unique-without-club.input';
import { MembershipFeeCreateManyClubInputEnvelope } from './membership-fee-create-many-club-input-envelope.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithWhereUniqueWithoutClubInput } from './membership-fee-update-with-where-unique-without-club.input';
import { MembershipFeeUpdateManyWithWhereWithoutClubInput } from './membership-fee-update-many-with-where-without-club.input';
import { MembershipFeeScalarWhereInput } from './membership-fee-scalar-where.input';

@InputType()
export class MembershipFeeUpdateManyWithoutClubInput {

    @Field(() => [MembershipFeeCreateWithoutClubInput], {nullable:true})
    create?: Array<MembershipFeeCreateWithoutClubInput>;

    @Field(() => [MembershipFeeCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<MembershipFeeCreateOrConnectWithoutClubInput>;

    @Field(() => [MembershipFeeUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<MembershipFeeUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => MembershipFeeCreateManyClubInputEnvelope, {nullable:true})
    createMany?: MembershipFeeCreateManyClubInputEnvelope;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    set?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    delete?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    connect?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<MembershipFeeUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [MembershipFeeUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<MembershipFeeUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [MembershipFeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<MembershipFeeScalarWhereInput>;
}
