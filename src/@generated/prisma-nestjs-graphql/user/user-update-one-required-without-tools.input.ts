import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToolsInput } from './user-create-without-tools.input';
import { UserCreateOrConnectWithoutToolsInput } from './user-create-or-connect-without-tools.input';
import { UserUpsertWithoutToolsInput } from './user-upsert-without-tools.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutToolsInput } from './user-update-without-tools.input';

@InputType()
export class UserUpdateOneRequiredWithoutToolsInput {

    @Field(() => UserCreateWithoutToolsInput, {nullable:true})
    create?: UserCreateWithoutToolsInput;

    @Field(() => UserCreateOrConnectWithoutToolsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutToolsInput;

    @Field(() => UserUpsertWithoutToolsInput, {nullable:true})
    upsert?: UserUpsertWithoutToolsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutToolsInput, {nullable:true})
    update?: UserUpdateWithoutToolsInput;
}
