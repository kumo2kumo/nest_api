import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventFeeWhereInput } from './event-fee-where.input';

@InputType()
export class EventFeeListRelationFilter {

    @Field(() => EventFeeWhereInput, {nullable:true})
    every?: EventFeeWhereInput;

    @Field(() => EventFeeWhereInput, {nullable:true})
    some?: EventFeeWhereInput;

    @Field(() => EventFeeWhereInput, {nullable:true})
    none?: EventFeeWhereInput;
}
