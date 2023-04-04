import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutUsersInput } from './club-create-without-users.input';
import { ClubCreateOrConnectWithoutUsersInput } from './club-create-or-connect-without-users.input';
import { ClubUpsertWithoutUsersInput } from './club-upsert-without-users.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutUsersInput } from './club-update-without-users.input';

@InputType()
export class ClubUpdateOneRequiredWithoutUsersInput {

    @Field(() => ClubCreateWithoutUsersInput, {nullable:true})
    create?: ClubCreateWithoutUsersInput;

    @Field(() => ClubCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutUsersInput;

    @Field(() => ClubUpsertWithoutUsersInput, {nullable:true})
    upsert?: ClubUpsertWithoutUsersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutUsersInput, {nullable:true})
    update?: ClubUpdateWithoutUsersInput;
}
