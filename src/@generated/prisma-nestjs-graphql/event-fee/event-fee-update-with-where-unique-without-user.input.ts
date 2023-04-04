import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithoutUserInput } from './event-fee-update-without-user.input';

@InputType()
export class EventFeeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeUpdateWithoutUserInput, {nullable:false})
    data!: EventFeeUpdateWithoutUserInput;
}
