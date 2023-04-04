import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubCountAggregate } from './club-count-aggregate.output';
import { ClubAvgAggregate } from './club-avg-aggregate.output';
import { ClubSumAggregate } from './club-sum-aggregate.output';
import { ClubMinAggregate } from './club-min-aggregate.output';
import { ClubMaxAggregate } from './club-max-aggregate.output';

@ObjectType()
export class AggregateClub {

    @Field(() => ClubCountAggregate, {nullable:true})
    _count?: ClubCountAggregate;

    @Field(() => ClubAvgAggregate, {nullable:true})
    _avg?: ClubAvgAggregate;

    @Field(() => ClubSumAggregate, {nullable:true})
    _sum?: ClubSumAggregate;

    @Field(() => ClubMinAggregate, {nullable:true})
    _min?: ClubMinAggregate;

    @Field(() => ClubMaxAggregate, {nullable:true})
    _max?: ClubMaxAggregate;
}
