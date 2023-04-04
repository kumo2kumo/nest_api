import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutEventFeesInput } from './club-update-without-event-fees.input';
import { ClubCreateWithoutEventFeesInput } from './club-create-without-event-fees.input';

@InputType()
export class ClubUpsertWithoutEventFeesInput {

    @Field(() => ClubUpdateWithoutEventFeesInput, {nullable:false})
    update!: ClubUpdateWithoutEventFeesInput;

    @Field(() => ClubCreateWithoutEventFeesInput, {nullable:false})
    create!: ClubCreateWithoutEventFeesInput;
}
