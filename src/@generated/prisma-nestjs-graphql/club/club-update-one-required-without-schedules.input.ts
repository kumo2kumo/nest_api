import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutSchedulesInput } from './club-create-without-schedules.input';
import { ClubCreateOrConnectWithoutSchedulesInput } from './club-create-or-connect-without-schedules.input';
import { ClubUpsertWithoutSchedulesInput } from './club-upsert-without-schedules.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutSchedulesInput } from './club-update-without-schedules.input';

@InputType()
export class ClubUpdateOneRequiredWithoutSchedulesInput {

    @Field(() => ClubCreateWithoutSchedulesInput, {nullable:true})
    create?: ClubCreateWithoutSchedulesInput;

    @Field(() => ClubCreateOrConnectWithoutSchedulesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutSchedulesInput;

    @Field(() => ClubUpsertWithoutSchedulesInput, {nullable:true})
    upsert?: ClubUpsertWithoutSchedulesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutSchedulesInput, {nullable:true})
    update?: ClubUpdateWithoutSchedulesInput;
}
