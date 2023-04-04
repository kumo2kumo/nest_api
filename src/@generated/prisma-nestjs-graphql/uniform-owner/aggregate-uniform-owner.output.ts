import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UniformOwnerCountAggregate } from './uniform-owner-count-aggregate.output';
import { UniformOwnerAvgAggregate } from './uniform-owner-avg-aggregate.output';
import { UniformOwnerSumAggregate } from './uniform-owner-sum-aggregate.output';
import { UniformOwnerMinAggregate } from './uniform-owner-min-aggregate.output';
import { UniformOwnerMaxAggregate } from './uniform-owner-max-aggregate.output';

@ObjectType()
export class AggregateUniformOwner {

    @Field(() => UniformOwnerCountAggregate, {nullable:true})
    _count?: UniformOwnerCountAggregate;

    @Field(() => UniformOwnerAvgAggregate, {nullable:true})
    _avg?: UniformOwnerAvgAggregate;

    @Field(() => UniformOwnerSumAggregate, {nullable:true})
    _sum?: UniformOwnerSumAggregate;

    @Field(() => UniformOwnerMinAggregate, {nullable:true})
    _min?: UniformOwnerMinAggregate;

    @Field(() => UniformOwnerMaxAggregate, {nullable:true})
    _max?: UniformOwnerMaxAggregate;
}
