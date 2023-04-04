import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithoutClubInput } from './event-fee-update-without-club.input';
import { EventFeeCreateWithoutClubInput } from './event-fee-create-without-club.input';

@InputType()
export class EventFeeUpsertWithWhereUniqueWithoutClubInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeUpdateWithoutClubInput, {nullable:false})
    update!: EventFeeUpdateWithoutClubInput;

    @Field(() => EventFeeCreateWithoutClubInput, {nullable:false})
    create!: EventFeeCreateWithoutClubInput;
}
