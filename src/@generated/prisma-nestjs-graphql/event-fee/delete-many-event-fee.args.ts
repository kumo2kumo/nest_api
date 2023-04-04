import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeWhereInput } from './event-fee-where.input';

@ArgsType()
export class DeleteManyEventFeeArgs {

    @Field(() => EventFeeWhereInput, {nullable:true})
    where?: EventFeeWhereInput;
}
