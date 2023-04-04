import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutReportsInput } from './club-update-without-reports.input';
import { ClubCreateWithoutReportsInput } from './club-create-without-reports.input';

@InputType()
export class ClubUpsertWithoutReportsInput {

    @Field(() => ClubUpdateWithoutReportsInput, {nullable:false})
    update!: ClubUpdateWithoutReportsInput;

    @Field(() => ClubCreateWithoutReportsInput, {nullable:false})
    create!: ClubCreateWithoutReportsInput;
}
