import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToolOwnerCountAggregate } from './tool-owner-count-aggregate.output';
import { ToolOwnerAvgAggregate } from './tool-owner-avg-aggregate.output';
import { ToolOwnerSumAggregate } from './tool-owner-sum-aggregate.output';
import { ToolOwnerMinAggregate } from './tool-owner-min-aggregate.output';
import { ToolOwnerMaxAggregate } from './tool-owner-max-aggregate.output';

@ObjectType()
export class AggregateToolOwner {

    @Field(() => ToolOwnerCountAggregate, {nullable:true})
    _count?: ToolOwnerCountAggregate;

    @Field(() => ToolOwnerAvgAggregate, {nullable:true})
    _avg?: ToolOwnerAvgAggregate;

    @Field(() => ToolOwnerSumAggregate, {nullable:true})
    _sum?: ToolOwnerSumAggregate;

    @Field(() => ToolOwnerMinAggregate, {nullable:true})
    _min?: ToolOwnerMinAggregate;

    @Field(() => ToolOwnerMaxAggregate, {nullable:true})
    _max?: ToolOwnerMaxAggregate;
}
