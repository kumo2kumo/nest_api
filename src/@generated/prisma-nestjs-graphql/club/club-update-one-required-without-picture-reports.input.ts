import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutPictureReportsInput } from './club-create-without-picture-reports.input';
import { ClubCreateOrConnectWithoutPictureReportsInput } from './club-create-or-connect-without-picture-reports.input';
import { ClubUpsertWithoutPictureReportsInput } from './club-upsert-without-picture-reports.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutPictureReportsInput } from './club-update-without-picture-reports.input';

@InputType()
export class ClubUpdateOneRequiredWithoutPictureReportsInput {

    @Field(() => ClubCreateWithoutPictureReportsInput, {nullable:true})
    create?: ClubCreateWithoutPictureReportsInput;

    @Field(() => ClubCreateOrConnectWithoutPictureReportsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutPictureReportsInput;

    @Field(() => ClubUpsertWithoutPictureReportsInput, {nullable:true})
    upsert?: ClubUpsertWithoutPictureReportsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutPictureReportsInput, {nullable:true})
    update?: ClubUpdateWithoutPictureReportsInput;
}
