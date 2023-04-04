import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutSledsInput } from './club-create-without-sleds.input';
import { ClubCreateOrConnectWithoutSledsInput } from './club-create-or-connect-without-sleds.input';
import { ClubUpsertWithoutSledsInput } from './club-upsert-without-sleds.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutSledsInput } from './club-update-without-sleds.input';

@InputType()
export class ClubUpdateOneRequiredWithoutSledsInput {

    @Field(() => ClubCreateWithoutSledsInput, {nullable:true})
    create?: ClubCreateWithoutSledsInput;

    @Field(() => ClubCreateOrConnectWithoutSledsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutSledsInput;

    @Field(() => ClubUpsertWithoutSledsInput, {nullable:true})
    upsert?: ClubUpsertWithoutSledsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutSledsInput, {nullable:true})
    update?: ClubUpdateWithoutSledsInput;
}
