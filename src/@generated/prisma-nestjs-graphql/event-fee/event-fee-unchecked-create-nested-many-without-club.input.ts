import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateWithoutClubInput } from './event-fee-create-without-club.input';
import { EventFeeCreateOrConnectWithoutClubInput } from './event-fee-create-or-connect-without-club.input';
import { EventFeeCreateManyClubInputEnvelope } from './event-fee-create-many-club-input-envelope.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';

@InputType()
export class EventFeeUncheckedCreateNestedManyWithoutClubInput {

    @Field(() => [EventFeeCreateWithoutClubInput], {nullable:true})
    create?: Array<EventFeeCreateWithoutClubInput>;

    @Field(() => [EventFeeCreateOrConnectWithoutClubInput], {nullable:true})
    connectOrCreate?: Array<EventFeeCreateOrConnectWithoutClubInput>;

    @Field(() => EventFeeCreateManyClubInputEnvelope, {nullable:true})
    createMany?: EventFeeCreateManyClubInputEnvelope;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    connect?: Array<EventFeeWhereUniqueInput>;
}
