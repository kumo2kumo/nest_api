import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutUsersInput } from './club-update-without-users.input';
import { ClubCreateWithoutUsersInput } from './club-create-without-users.input';

@InputType()
export class ClubUpsertWithoutUsersInput {

    @Field(() => ClubUpdateWithoutUsersInput, {nullable:false})
    update!: ClubUpdateWithoutUsersInput;

    @Field(() => ClubCreateWithoutUsersInput, {nullable:false})
    create!: ClubCreateWithoutUsersInput;
}
