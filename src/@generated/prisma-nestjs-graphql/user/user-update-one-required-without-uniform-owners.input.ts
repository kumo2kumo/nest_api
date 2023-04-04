import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUniformOwnersInput } from './user-create-without-uniform-owners.input';
import { UserCreateOrConnectWithoutUniformOwnersInput } from './user-create-or-connect-without-uniform-owners.input';
import { UserUpsertWithoutUniformOwnersInput } from './user-upsert-without-uniform-owners.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUniformOwnersInput } from './user-update-without-uniform-owners.input';

@InputType()
export class UserUpdateOneRequiredWithoutUniformOwnersInput {

    @Field(() => UserCreateWithoutUniformOwnersInput, {nullable:true})
    create?: UserCreateWithoutUniformOwnersInput;

    @Field(() => UserCreateOrConnectWithoutUniformOwnersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUniformOwnersInput;

    @Field(() => UserUpsertWithoutUniformOwnersInput, {nullable:true})
    upsert?: UserUpsertWithoutUniformOwnersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUniformOwnersInput, {nullable:true})
    update?: UserUpdateWithoutUniformOwnersInput;
}
