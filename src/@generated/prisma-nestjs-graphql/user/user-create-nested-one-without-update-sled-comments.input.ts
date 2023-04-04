import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUpdateSledCommentsInput } from './user-create-without-update-sled-comments.input';
import { UserCreateOrConnectWithoutUpdateSledCommentsInput } from './user-create-or-connect-without-update-sled-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUpdateSledCommentsInput {

    @Field(() => UserCreateWithoutUpdateSledCommentsInput, {nullable:true})
    create?: UserCreateWithoutUpdateSledCommentsInput;

    @Field(() => UserCreateOrConnectWithoutUpdateSledCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUpdateSledCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
