import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';
import { ClubCreateOrConnectWithoutMembersInput } from './club-create-or-connect-without-members.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutMembersInput {

    @Field(() => ClubCreateWithoutMembersInput, {nullable:true})
    create?: ClubCreateWithoutMembersInput;

    @Field(() => ClubCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
