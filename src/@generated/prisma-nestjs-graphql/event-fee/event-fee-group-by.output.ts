import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventFeeCountAggregate } from './event-fee-count-aggregate.output';
import { EventFeeAvgAggregate } from './event-fee-avg-aggregate.output';
import { EventFeeSumAggregate } from './event-fee-sum-aggregate.output';
import { EventFeeMinAggregate } from './event-fee-min-aggregate.output';
import { EventFeeMaxAggregate } from './event-fee-max-aggregate.output';

@ObjectType()
export class EventFeeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false})
    january!: boolean;

    @Field(() => Boolean, {nullable:false})
    february!: boolean;

    @Field(() => Boolean, {nullable:false})
    march!: boolean;

    @Field(() => Boolean, {nullable:false})
    april!: boolean;

    @Field(() => Boolean, {nullable:false})
    may!: boolean;

    @Field(() => Boolean, {nullable:false})
    june!: boolean;

    @Field(() => Boolean, {nullable:false})
    july!: boolean;

    @Field(() => Boolean, {nullable:false})
    august!: boolean;

    @Field(() => Boolean, {nullable:false})
    september!: boolean;

    @Field(() => Boolean, {nullable:false})
    october!: boolean;

    @Field(() => Boolean, {nullable:false})
    november!: boolean;

    @Field(() => Boolean, {nullable:false})
    december!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;

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
