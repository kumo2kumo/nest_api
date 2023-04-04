import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUniformOwnersInput } from './user-create-without-uniform-owners.input';
import { UserCreateOrConnectWithoutUniformOwnersInput } from './user-create-or-connect-without-uniform-owners.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUniformOwnersInput {

    @Field(() => UserCreateWithoutUniformOwnersInput, {nullable:true})
    create?: UserCreateWithoutUniformOwnersInput;

    @Field(() => UserCreateOrConnectWithoutUniformOwnersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUniformOwnersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
