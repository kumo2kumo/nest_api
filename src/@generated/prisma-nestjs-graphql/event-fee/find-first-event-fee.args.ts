import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeWhereInput } from './event-fee-where.input';
import { EventFeeOrderByWithRelationInput } from './event-fee-order-by-with-relation.input';
import { EventFeeWhereUniqueInput } from './event-fee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventFeeScalarFieldEnum } from './event-fee-scalar-field.enum';

@ArgsType()
export class FindFirstEventFeeArgs {

    @Field(() => EventFeeWhereInput, {nullable:true})
    where?: EventFeeWhereInput;

    @Field(() => [EventFeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventFeeOrderByWithRelationInput>;

    @Field(() => EventFeeWhereUniqueInput, {nullable:true})
    cursor?: EventFeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventFeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventFeeScalarFieldEnum>;
}
