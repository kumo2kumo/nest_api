import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateWithoutUserInput } from './event-fee-create-without-user.input';
import { EventFeeCreateOrConnectWithoutUserInput } from './event-fee-create-or-connect-without-user.input';
import { EventFeeUpsertWithWhereUniqueWithoutUserInput } from './event-fee-upsert-with-where-unique-without-user.input';
import { EventFeeCreateManyUserInputEnvelope } from './event-fee-create-many-user-input-envelope.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithWhereUniqueWithoutUserInput } from './event-fee-update-with-where-unique-without-user.input';
import { EventFeeUpdateManyWithWhereWithoutUserInput } from './event-fee-update-many-with-where-without-user.input';
import { EventFeeScalarWhereInput } from './event-fee-scalar-where.input';

@InputType()
export class EventFeeUncheckedUpdateManyWithoutUserInput {

    @Field(() => [EventFeeCreateWithoutUserInput], {nullable:true})
    create?: Array<EventFeeCreateWithoutUserInput>;

    @Field(() => [EventFeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventFeeCreateOrConnectWithoutUserInput>;

    @Field(() => [EventFeeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EventFeeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventFeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventFeeCreateManyUserInputEnvelope;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    set?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    delete?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeWhereUniqueInput], {nullable:true})
    connect?: Array<EventFeeWhereUniqueInput>;

    @Field(() => [EventFeeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EventFeeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventFeeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EventFeeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventFeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventFeeScalarWhereInput>;
}
