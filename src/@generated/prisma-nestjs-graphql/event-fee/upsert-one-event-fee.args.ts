import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { EventFeeCreateInput } from './event-fee-create.input';
import { EventFeeUpdateInput } from './event-fee-update.input';

@ArgsType()
export class UpsertOneEventFeeArgs {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;

    @Field(() => EventFeeCreateInput, {nullable:false})
    create!: EventFeeCreateInput;

    @Field(() => EventFeeUpdateInput, {nullable:false})
    update!: EventFeeUpdateInput;
}
