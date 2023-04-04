import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';
import { UserCreateOrConnectWithoutMemberInput } from './user-create-or-connect-without-member.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemberInput {

    @Field(() => UserCreateWithoutMemberInput, {nullable:true})
    create?: UserCreateWithoutMemberInput;

    @Field(() => UserCreateOrConnectWithoutMemberInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
