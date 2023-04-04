import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutSledsInput } from './club-update-without-sleds.input';
import { ClubCreateWithoutSledsInput } from './club-create-without-sleds.input';

@InputType()
export class ClubUpsertWithoutSledsInput {

    @Field(() => ClubUpdateWithoutSledsInput, {nullable:false})
    update!: ClubUpdateWithoutSledsInput;

    @Field(() => ClubCreateWithoutSledsInput, {nullable:false})
    create!: ClubCreateWithoutSledsInput;
}
