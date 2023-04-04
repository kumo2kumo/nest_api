import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutReportsInput } from './club-create-without-reports.input';
import { ClubCreateOrConnectWithoutReportsInput } from './club-create-or-connect-without-reports.input';
import { ClubUpsertWithoutReportsInput } from './club-upsert-without-reports.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutReportsInput } from './club-update-without-reports.input';

@InputType()
export class ClubUpdateOneRequiredWithoutReportsInput {

    @Field(() => ClubCreateWithoutReportsInput, {nullable:true})
    create?: ClubCreateWithoutReportsInput;

    @Field(() => ClubCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutReportsInput;

    @Field(() => ClubUpsertWithoutReportsInput, {nullable:true})
    upsert?: ClubUpsertWithoutReportsInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutReportsInput, {nullable:true})
    update?: ClubUpdateWithoutReportsInput;
}
