import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutMembersInput } from './club-update-without-members.input';
import { ClubCreateWithoutMembersInput } from './club-create-without-members.input';

@InputType()
export class ClubUpsertWithoutMembersInput {

    @Field(() => ClubUpdateWithoutMembersInput, {nullable:false})
    update!: ClubUpdateWithoutMembersInput;

    @Field(() => ClubCreateWithoutMembersInput, {nullable:false})
    create!: ClubCreateWithoutMembersInput;
}
