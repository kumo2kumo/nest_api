import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutPictureReportsInput } from './club-create-without-picture-reports.input';
import { ClubCreateOrConnectWithoutPictureReportsInput } from './club-create-or-connect-without-picture-reports.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutPictureReportsInput {

    @Field(() => ClubCreateWithoutPictureReportsInput, {nullable:true})
    create?: ClubCreateWithoutPictureReportsInput;

    @Field(() => ClubCreateOrConnectWithoutPictureReportsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutPictureReportsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
