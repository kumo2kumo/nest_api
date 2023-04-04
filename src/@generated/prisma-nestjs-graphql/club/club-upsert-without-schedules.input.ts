import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutSchedulesInput } from './club-update-without-schedules.input';
import { ClubCreateWithoutSchedulesInput } from './club-create-without-schedules.input';

@InputType()
export class ClubUpsertWithoutSchedulesInput {

    @Field(() => ClubUpdateWithoutSchedulesInput, {nullable:false})
    update!: ClubUpdateWithoutSchedulesInput;

    @Field(() => ClubCreateWithoutSchedulesInput, {nullable:false})
    create!: ClubCreateWithoutSchedulesInput;
}
