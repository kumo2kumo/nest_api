import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeCreateWithoutClubInput } from './event-fee-create-without-club.input';

@InputType()
export class EventFeeCreateOrConnectWithoutClubInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeCreateWithoutClubInput, {nullable:false})
    create!: EventFeeCreateWithoutClubInput;
}
