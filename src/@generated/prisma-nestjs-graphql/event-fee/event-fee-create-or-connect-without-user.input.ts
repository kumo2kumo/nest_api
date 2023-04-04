import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeCreateWithoutUserInput } from './event-fee-create-without-user.input';

@InputType()
export class EventFeeCreateOrConnectWithoutUserInput {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeCreateWithoutUserInput, {nullable:false})
    create!: EventFeeCreateWithoutUserInput;
}
