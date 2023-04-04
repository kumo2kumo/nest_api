import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPictureReportsInput } from './user-create-without-picture-reports.input';
import { UserCreateOrConnectWithoutPictureReportsInput } from './user-create-or-connect-without-picture-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPictureReportsInput {

    @Field(() => UserCreateWithoutPictureReportsInput, {nullable:true})
    create?: UserCreateWithoutPictureReportsInput;

    @Field(() => UserCreateOrConnectWithoutPictureReportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPictureReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
