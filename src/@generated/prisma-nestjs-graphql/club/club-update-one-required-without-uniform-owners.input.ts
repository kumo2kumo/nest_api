import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutUniformOwnersInput } from './club-create-without-uniform-owners.input';
import { ClubCreateOrConnectWithoutUniformOwnersInput } from './club-create-or-connect-without-uniform-owners.input';
import { ClubUpsertWithoutUniformOwnersInput } from './club-upsert-without-uniform-owners.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutUniformOwnersInput } from './club-update-without-uniform-owners.input';

@InputType()
export class ClubUpdateOneRequiredWithoutUniformOwnersInput {

    @Field(() => ClubCreateWithoutUniformOwnersInput, {nullable:true})
    create?: ClubCreateWithoutUniformOwnersInput;

    @Field(() => ClubCreateOrConnectWithoutUniformOwnersInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutUniformOwnersInput;

    @Field(() => ClubUpsertWithoutUniformOwnersInput, {nullable:true})
    upsert?: ClubUpsertWithoutUniformOwnersInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutUniformOwnersInput, {nullable:true})
    update?: ClubUpdateWithoutUniformOwnersInput;
}
