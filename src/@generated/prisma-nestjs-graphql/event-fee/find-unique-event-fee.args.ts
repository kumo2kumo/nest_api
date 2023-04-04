import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';

@ArgsType()
export class FindUniqueEventFeeArgs {

    @Field(() => EventFeeWhereUniqueInput, {nullable:false})
    where!: EventFeeWhereUniqueInput;
}
