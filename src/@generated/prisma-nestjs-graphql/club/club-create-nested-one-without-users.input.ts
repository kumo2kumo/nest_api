import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutUsersInput } from './club-create-without-users.input';
import { ClubCreateOrConnectWithoutUsersInput } from './club-create-or-connect-without-users.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutUsersInput {

    @Field(() => ClubCreateWithoutUsersInput, {nullable:true})
    create?: ClubCreateWithoutUsersInput;

    @Field(() => ClubCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutUsersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
