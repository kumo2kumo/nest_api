import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SledCountAggregate } from './sled-count-aggregate.output';
import { SledAvgAggregate } from './sled-avg-aggregate.output';
import { SledSumAggregate } from './sled-sum-aggregate.output';
import { SledMinAggregate } from './sled-min-aggregate.output';
import { SledMaxAggregate } from './sled-max-aggregate.output';

@ObjectType()
export class AggregateSled {

    @Field(() => SledCountAggregate, {nullable:true})
    _count?: SledCountAggregate;

    @Field(() => SledAvgAggregate, {nullable:true})
    _avg?: SledAvgAggregate;

    @Field(() => SledSumAggregate, {nullable:true})
    _sum?: SledSumAggregate;

    @Field(() => SledMinAggregate, {nullable:true})
    _min?: SledMinAggregate;

    @Field(() => SledMaxAggregate, {nullable:true})
    _max?: SledMaxAggregate;
}
