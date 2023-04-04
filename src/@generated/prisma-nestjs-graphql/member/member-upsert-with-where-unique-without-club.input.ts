import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutClubInput } from './member-update-without-club.input';
import { MemberCreateWithoutClubInput } from './member-create-without-club.input';

@InputType()
export class MemberUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutClubInput, {nullable:false})
    update!: MemberUpdateWithoutClubInput;

    @Field(() => MemberCreateWithoutClubInput, {nullable:false})
    create!: MemberCreateWithoutClubInput;
}
