import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPictureReportsInput } from './user-create-without-picture-reports.input';

@InputType()
export class UserCreateOrConnectWithoutPictureReportsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPictureReportsInput, {nullable:false})
    create!: UserCreateWithoutPictureReportsInput;
}
