import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberCreateWithoutClubInput } from './member-create-without-club.input';

@InputType()
export class MemberCreateOrConnectWithoutClubInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutClubInput, {nullable:false})
    create!: MemberCreateWithoutClubInput;
}
