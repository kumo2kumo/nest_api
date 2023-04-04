import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPictureReportsInput } from './user-update-without-picture-reports.input';
import { UserCreateWithoutPictureReportsInput } from './user-create-without-picture-reports.input';

@InputType()
export class UserUpsertWithoutPictureReportsInput {

    @Field(() => UserUpdateWithoutPictureReportsInput, {nullable:false})
    update!: UserUpdateWithoutPictureReportsInput;

    @Field(() => UserCreateWithoutPictureReportsInput, {nullable:false})
    create!: UserCreateWithoutPictureReportsInput;
}
