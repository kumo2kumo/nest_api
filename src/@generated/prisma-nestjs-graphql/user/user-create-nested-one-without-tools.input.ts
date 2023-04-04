import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToolsInput } from './user-create-without-tools.input';
import { UserCreateOrConnectWithoutToolsInput } from './user-create-or-connect-without-tools.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutToolsInput {

    @Field(() => UserCreateWithoutToolsInput, {nullable:true})
    create?: UserCreateWithoutToolsInput;

    @Field(() => UserCreateOrConnectWithoutToolsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutToolsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
