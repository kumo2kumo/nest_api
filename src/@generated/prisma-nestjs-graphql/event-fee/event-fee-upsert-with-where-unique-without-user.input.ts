import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeUpdateWithoutUserInput } from './event-fee-update-without-user.input';
import { EventFeeCreateWithoutUserInput } from './event-fee-create-without-user.input';

@InputType()
export class EventFeeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeUpdateWithoutUserInput, {nullable:false})
    update!: EventFeeUpdateWithoutUserInput;

    @Field(() => EventFeeCreateWithoutUserInput, {nullable:false})
    create!: EventFeeCreateWithoutUserInput;
}
