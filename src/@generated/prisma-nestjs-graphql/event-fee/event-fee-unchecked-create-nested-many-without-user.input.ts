import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateWithoutUserInput } from './event-fee-create-without-user.input';
import { EventFeeCreateOrConnectWithoutUserInput } from './event-fee-create-or-connect-without-user.input';
import { EventFeeCreateManyUserInputEnvelope } from './event-fee-create-many-user-input-envelope.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';

@InputType()
export class EventFeeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EventFeeCreateWithoutUserInput], {nullable:true})
    create?: Array<EventFeeCreateWithoutUserInput>;

    @Field(() => [EventFeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventFeeCreateOrConnectWithoutUserInput>;

    @Field(() => EventFeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventFeeCreateManyUserInputEnvelope;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    connect?: Array<EventFeeWhereUniqueInput>;
}
