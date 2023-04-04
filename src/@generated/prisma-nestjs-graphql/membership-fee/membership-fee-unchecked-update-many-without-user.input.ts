import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipFeeCreateWithoutUserInput } from './membership-fee-create-without-user.input';
import { MembershipFeeCreateOrConnectWithoutUserInput } from './membership-fee-create-or-connect-without-user.input';
import { MembershipFeeUpsertWithWhereUniqueWithoutUserInput } from './membership-fee-upsert-with-where-unique-without-user.input';
import { MembershipFeeCreateManyUserInputEnvelope } from './membership-fee-create-many-user-input-envelope.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { MembershipFeeUpdateWithWhereUniqueWithoutUserInput } from './membership-fee-update-with-where-unique-without-user.input';
import { MembershipFeeUpdateManyWithWhereWithoutUserInput } from './membership-fee-update-many-with-where-without-user.input';
import { MembershipFeeScalarWhereInput } from './membership-fee-scalar-where.input';

@InputType()
export class MembershipFeeUncheckedUpdateManyWithoutUserInput {

    @Field(() => [MembershipFeeCreateWithoutUserInput], {nullable:true})
    create?: Array<MembershipFeeCreateWithoutUserInput>;

    @Field(() => [MembershipFeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<MembershipFeeCreateOrConnectWithoutUserInput>;

    @Field(() => [MembershipFeeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<MembershipFeeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MembershipFeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: MembershipFeeCreateManyUserInputEnvelope;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    set?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    delete?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeWhereUniqueInput], {nullable:true})
    connect?: Array<MembershipFeeWhereUniqueInput>;

    @Field(() => [MembershipFeeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<MembershipFeeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MembershipFeeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<MembershipFeeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MembershipFeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<MembershipFeeScalarWhereInput>;
}
