import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateManyUserInput } from './event-fee-create-many-user.input';

@InputType()
export class EventFeeCreateManyUserInputEnvelope {

    @Field(() => [EventFeeCreateManyUserInput], {nullable:false})
    data!: Array<EventFeeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
