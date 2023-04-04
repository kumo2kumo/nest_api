import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutSledsInput } from './club-create-without-sleds.input';
import { ClubCreateOrConnectWithoutSledsInput } from './club-create-or-connect-without-sleds.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubCreateNestedOneWithoutSledsInput {

    @Field(() => ClubCreateWithoutSledsInput, {nullable:true})
    create?: ClubCreateWithoutSledsInput;

    @Field(() => ClubCreateOrConnectWithoutSledsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutSledsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;
}
