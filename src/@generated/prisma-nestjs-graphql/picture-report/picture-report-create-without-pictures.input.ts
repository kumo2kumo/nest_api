import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutPictureReportsInput } from '../club/club-create-nested-one-without-picture-reports.input';
import { UserCreateNestedOneWithoutPictureReportsInput } from '../user/user-create-nested-one-without-picture-reports.input';

@InputType()
export class PictureReportCreateWithoutPicturesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutPictureReportsInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutPictureReportsInput;

    @Field(() => UserCreateNestedOneWithoutPictureReportsInput, {nullable:false})
    uploadUser!: UserCreateNestedOneWithoutPictureReportsInput;
}
