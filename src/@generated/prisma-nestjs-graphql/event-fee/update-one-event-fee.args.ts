import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeUpdateInput } from './event-fee-update.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';

@ArgsType()
export class UpdateOneEventFeeArgs {

    @Field(() => EventFeeUpdateInput, {nullable:false})
    data!: EventFeeUpdateInput;

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;
}
