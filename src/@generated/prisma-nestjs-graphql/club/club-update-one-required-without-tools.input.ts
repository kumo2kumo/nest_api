import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutToolsInput } from './club-create-without-tools.input';
import { ClubCreateOrConnectWithoutToolsInput } from './club-create-or-connect-without-tools.input';
import { ClubUpsertWithoutToolsInput } from './club-upsert-without-tools.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutToolsInput } from './club-update-without-tools.input';

@InputType()
export class ClubUpdateOneRequiredWithoutToolsInput {

    @Field(() => ClubCreateWithoutToolsInput, {nullable:true})
    create?: ClubCreateWithoutToolsInput;

    @Field(() => ClubCreateOrConnectWithoutToolsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutToolsInput;

    @Field(() => ClubUpsertWithoutToolsInput, {nullable:true})
    upsert?: ClubUpsertWithoutToolsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutToolsInput, {nullable:true})
    update?: ClubUpdateWithoutToolsInput;
}
