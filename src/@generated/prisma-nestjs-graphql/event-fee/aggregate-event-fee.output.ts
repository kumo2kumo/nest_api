import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventFeeCountAggregate } from './event-fee-count-aggregate.output';
import { EventFeeAvgAggregate } from './event-fee-avg-aggregate.output';
import { EventFeeSumAggregate } from './event-fee-sum-aggregate.output';
import { EventFeeMinAggregate } from './event-fee-min-aggregate.output';
import { EventFeeMaxAggregate } from './event-fee-max-aggregate.output';

@ObjectType()
export class AggregateEventFee {

    @Field(() => EventFeeCountAggregate, {nullable:true})
    _count?: EventFeeCountAggregate;

    @Field(() => EventFeeAvgAggregate, {nullable:true})
    _avg?: EventFeeAvgAggregate;

    @Field(() => EventFeeSumAggregate, {nullable:true})
    _sum?: EventFeeSumAggregate;

    @Field(() => EventFeeMinAggregate, {nullable:true})
    _min?: EventFeeMinAggregate;

    @Field(() => EventFeeMaxAggregate, {nullable:true})
    _max?: EventFeeMaxAggregate;
}
