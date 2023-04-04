import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateWithoutClubInput } from './event-fee-create-without-club.input';
import { EventFeeCreateOrConnectWithoutClubInput } from './event-fee-create-or-connect-without-club.input';
import { EventFeeUpsertWithWhereUniqueWithoutClubInput } from './event-fee-upsert-with-where-unique-without-club.input';
import { EventFeeCreateManyClubInputEnvelope } from './event-fee-create-many-club-input-envelope.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithWhereUniqueWithoutClubInput } from './event-fee-update-with-where-unique-without-club.input';
import { EventFeeUpdateManyWithWhereWithoutClubInput } from './event-fee-update-many-with-where-without-club.input';
import { EventFeeScalarWhereInput } from './event-fee-scalar-where.input';

@InputType()
export class EventFeeUncheckedUpdateManyWithoutClubInput {

    @Field(() => [EventFeeCreateWithoutClubInput], {nullable:true})
    create?: Array<EventFeeCreateWithoutClubInput>;

    @Field(() => [EventFeeCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<EventFeeCreateOrConnectWithoutClubInput>;

    @Field(() => [EventFeeUpsertWithWhereUniqueWithoutClubInput], {nullable:true})
    upsert?: Array<EventFeeUpsertWithWhereUniqueWithoutClubInput>;

    @Field(() => EventFeeCreateManyClubInputEnvelope, {nullable:true})
    createMany?: EventFeeCreateManyClubInputEnvelope;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    set?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    delete?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    connect?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeUpdateWithWhereUniqueWithoutClubInput], {nullable:true})
    update?: Array<EventFeeUpdateWithWhereUniqueWithoutClubInput>;

    @Field(() => [EventFeeUpdateManyWithWhereWithoutClubInput], {nullable:true})
    updateMany?: Array<EventFeeUpdateManyWithWhereWithoutClubInput>;

    @Field(() => [EventFeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventFeeScalarWhereInput>;
}
