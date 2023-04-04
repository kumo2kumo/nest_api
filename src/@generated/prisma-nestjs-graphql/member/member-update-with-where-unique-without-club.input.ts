import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutClubInput } from './member-update-without-club.input';

@InputType()
export class MemberUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutClubInput, {nullable:false})
    data!: MemberUpdateWithoutClubInput;
}
