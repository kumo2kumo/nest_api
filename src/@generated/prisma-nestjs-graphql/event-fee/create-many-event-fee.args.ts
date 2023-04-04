import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeCreateManyInput } from './event-fee-create-many.input';

@ArgsType()
export class CreateManyEventFeeArgs {

    @Field(() => [EventFeeCreateManyInput], {nullable:false})
    data!: Array<EventFeeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
