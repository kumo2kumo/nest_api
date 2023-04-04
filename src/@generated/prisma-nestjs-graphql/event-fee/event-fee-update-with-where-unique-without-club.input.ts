import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithoutClubInput } from './event-fee-update-without-club.input';

@InputType()
export class EventFeeUpdateWithWhereUniqueWithoutClubInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeUpdateWithoutClubInput, {nullable:false})
    data!: EventFeeUpdateWithoutClubInput;
}
