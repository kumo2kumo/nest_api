import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutClubInput } from './member-create-without-club.input';
import { MemberCreateOrConnectWithoutClubInput } from './member-create-or-connect-without-club.input';
import { MemberUpsertWithWhereUniqueWithoutClubInput } from './member-upsert-with-where-unique-without-club.input';
import { MemberCreateManyClubInputEnvelope } from './member-create-many-club-input-envelope.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithWhereUniqueWithoutClubInput } from './member-update-with-where-unique-without-club.input';
import { MemberUpdateManyWithWhereWithoutClubInput } from './member-update-many-with-where-without-club.input';
import { MemberScalarWhereInput } from './member-scalar-where.input';

@InputType()
export class MemberUpdateManyWithoutClubInput {

    @Field(() => [MemberCreateWithoutClubInput], {nullable:true})
    create?: Array<MemberCreateWithoutClubInput>;

    @Field(() => [MemberCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<MemberCreateOrConnectWithoutClubInput>;

    @Field(() => [MemberUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<MemberUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => MemberCreateManyClubInputEnvelope, {nullable:true})
    createMany?: MemberCreateManyClubInputEnvelope;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    set?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    disconnect?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    delete?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    connect?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<MemberUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [MemberUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<MemberUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    deleteMany?: Array<MemberScalarWhereInput>;
}
