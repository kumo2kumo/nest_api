import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeCreateManyClubInput } from './event-fee-create-many-club.input';

@InputType()
export class EventFeeCreateManyClubInputEnvelope {

    @Field(() => [EventFeeCreateManyClubInput], {nullable:false})
    data!: Array<EventFeeCreateManyClubInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
