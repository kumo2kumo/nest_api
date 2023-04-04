import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubUpdateWithoutPictureReportsInput } from './club-update-without-picture-reports.input';
import { ClubCreateWithoutPictureReportsInput } from './club-create-without-picture-reports.input';

@InputType()
export class ClubUpsertWithoutPictureReportsInput {

    @Field(() => ClubUpdateWithoutPictureReportsInput, {nullable:false})
    update!: ClubUpdateWithoutPictureReportsInput;

    @Field(() => ClubCreateWithoutPictureReportsInput, {nullable:false})
    create!: ClubCreateWithoutPictureReportsInput;
}
