import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUpdateSledCommentsInput } from './user-create-without-update-sled-comments.input';
import { UserCreateOrConnectWithoutUpdateSledCommentsInput } from './user-create-or-connect-without-update-sled-comments.input';
import { UserUpsertWithoutUpdateSledCommentsInput } from './user-upsert-without-update-sled-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUpdateSledCommentsInput } from './user-update-without-update-sled-comments.input';

@InputType()
export class UserUpdateOneWithoutUpdateSledCommentsInput {

    @Field(() => UserCreateWithoutUpdateSledCommentsInput, {nullable:true})
    create?: UserCreateWithoutUpdateSledCommentsInput;

    @Field(() => UserCreateOrConnectWithoutUpdateSledCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUpdateSledCommentsInput;

    @Field(() => UserUpsertWithoutUpdateSledCommentsInput, {nullable:true})
    upsert?: UserUpsertWithoutUpdateSledCommentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUpdateSledCommentsInput, {nullable:true})
    update?: UserUpdateWithoutUpdateSledCommentsInput;
}
