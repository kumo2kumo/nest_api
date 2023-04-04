import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutClubInput } from './member-create-without-club.input';
import { MemberCreateOrConnectWithoutClubInput } from './member-create-or-connect-without-club.input';
import { MemberCreateManyClubInputEnvelope } from './member-create-many-club-input-envelope.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedManyWithoutClubInput {

    @Field(() => [MemberCreateWithoutClubInput], {nullable:true})
    create?: Array<MemberCreateWithoutClubInput>;

    @Field(() => [MemberCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<MemberCreateOrConnectWithoutClubInput>;

    @Field(() => MemberCreateManyClubInputEnvelope, {nullable:true})
    createMany?: MemberCreateManyClubInputEnvelope;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    connect?: Array<MemberWhereUniqueInput>;
}
