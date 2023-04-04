import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';
import { ClubCreateOrConnectWithoutMembersInput } from './club-create-or-connect-without-members.input';
import { ClubUpsertWithoutMembersInput } from './club-upsert-without-members.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutMembersInput } from './club-update-without-members.input';

@InputType()
export class ClubUpdateOneRequiredWithoutMembersInput {

    @Field(() => ClubCreateWithoutMembersInput, {nullable:true})
    create?: ClubCreateWithoutMembersInput;

    @Field(() => ClubCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput;

    @Field(() => ClubUpsertWithoutMembersInput, {nullable:true})
    upsert?: ClubUpsertWithoutMembersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutMembersInput, {nullable:true})
    update?: ClubUpdateWithoutMembersInput;
}
