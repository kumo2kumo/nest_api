import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUpdateSledCommentsInput } from './user-create-without-update-sled-comments.input';

@InputType()
export class UserCreateOrConnectWithoutUpdateSledCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUpdateSledCommentsInput, {nullable:false})
    create!: UserCreateWithoutUpdateSledCommentsInput;
}
