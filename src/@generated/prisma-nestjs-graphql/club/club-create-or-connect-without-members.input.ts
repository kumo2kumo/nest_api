import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';

@InputType()
export class ClubCreateOrConnectWithoutMembersInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutMembersInput, {nullable:false})
    create!: ClubCreateWithoutMembersInput;
}
