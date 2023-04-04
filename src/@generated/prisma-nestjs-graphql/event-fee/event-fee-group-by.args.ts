import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventFeeWhereInput } from './event-fee-where.input';
import { EventFeeOrderByWithAggregationInput } from './event-fee-order-by-with-aggregation.input';
import { EventFeeScalarFieldEnum } from './event-fee-scalar-field.enum';
import { EventFeeScalarWhereWithAggregatesInput } from './event-fee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventFeeCountAggregateInput } from './event-fee-count-aggregate.input';
import { EventFeeAvgAggregateInput } from './event-fee-avg-aggregate.input';
import { EventFeeSumAggregateInput } from './event-fee-sum-aggregate.input';
import { EventFeeMinAggregateInput } from './event-fee-min-aggregate.input';
import { EventFeeMaxAggregateInput } from './event-fee-max-aggregate.input';

@ArgsType()
export class EventFeeGroupByArgs {

    @Field(() => EventFeeWhereInput, {nullable:true})
    where?: EventFeeWhereInput;

    @Field(() => [EventFeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventFeeOrderByWithAggregationInput>;

    @Field(() => [EventFeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventFeeScalarFieldEnum>;

    @Field(() => EventFeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventFeeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventFeeCountAggregateInput, {nullable:true})
    _count?: EventFeeCountAggregateInput;

    @Field(() => EventFeeAvgAggregateInput, {nullable:true})
    _avg?: EventFeeAvgAggregateInput;

    @Field(() => EventFeeSumAggregateInput, {nullable:true})
    _sum?: EventFeeSumAggregateInput;

    @Field(() => EventFeeMinAggregateInput, {nullable:true})
    _min?: EventFeeMinAggregateInput;

    @Field(() => EventFeeMaxAggregateInput, {nullable:true})
    _max?: EventFeeMaxAggregateInput;
}
