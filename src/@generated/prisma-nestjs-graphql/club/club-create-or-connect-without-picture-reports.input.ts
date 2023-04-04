import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubCreateWithoutPictureReportsInput } from './club-create-without-picture-reports.input';

@InputType()
export class ClubCreateOrConnectWithoutPictureReportsInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutPictureReportsInput, {nullable:false})
    create!: ClubCreateWithoutPictureReportsInput;
}
