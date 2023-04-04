import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutEventFeesInput } from './club-create-without-event-fees.input';
import { ClubCreateOrConnectWithoutEventFeesInput } from './club-create-or-connect-without-event-fees.input';
import { ClubUpsertWithoutEventFeesInput } from './club-upsert-without-event-fees.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { ClubUpdateWithoutEventFeesInput } from './club-update-without-event-fees.input';

@InputType()
export class ClubUpdateOneRequiredWithoutEventFeesInput {

    @Field(() => ClubCreateWithoutEventFeesInput, {nullable:true})
    create?: ClubCreateWithoutEventFeesInput;

    @Field(() => ClubCreateOrConnectWithoutEventFeesInput, {nullable:true})
    connectOrCreate?: ClubCreateOrConnectWithoutEventFeesInput;

    @Field(() => ClubUpsertWithoutEventFeesInput, {nullable:true})
    upsert?: ClubUpsertWithoutEventFeesInput;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    connect?: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutEventFeesInput, {nullable:true})
    update?: ClubUpdateWithoutEventFeesInput;
}
