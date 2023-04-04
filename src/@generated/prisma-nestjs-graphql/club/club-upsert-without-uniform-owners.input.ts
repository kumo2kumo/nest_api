import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutUniformOwnersInput } from './club-update-without-uniform-owners.input';
import { ClubCreateWithoutUniformOwnersInput } from './club-create-without-uniform-owners.input';

@InputType()
export class ClubUpsertWithoutUniformOwnersInput {

    @Field(() => ClubUpdateWithoutUniformOwnersInput, {nullable:false})
    update!: ClubUpdateWithoutUniformOwnersInput;

    @Field(() => ClubCreateWithoutUniformOwnersInput, {nullable:false})
    create!: ClubCreateWithoutUniformOwnersInput;
}
