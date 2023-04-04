import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPictureReportsInput } from './user-create-without-picture-reports.input';
import { UserCreateOrConnectWithoutPictureReportsInput } from './user-create-or-connect-without-picture-reports.input';
import { UserUpsertWithoutPictureReportsInput } from './user-upsert-without-picture-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPictureReportsInput } from './user-update-without-picture-reports.input';

@InputType()
export class UserUpdateOneRequiredWithoutPictureReportsInput {

    @Field(() => UserCreateWithoutPictureReportsInput, {nullable:true})
    create?: UserCreateWithoutPictureReportsInput;

    @Field(() => UserCreateOrConnectWithoutPictureReportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPictureReportsInput;

    @Field(() => UserUpsertWithoutPictureReportsInput, {nullable:true})
    upsert?: UserUpsertWithoutPictureReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPictureReportsInput, {nullable:true})
    update?: UserUpdateWithoutPictureReportsInput;
}
