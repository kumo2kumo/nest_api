import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ToolOwnerCountAggregate } from './tool-owner-count-aggregate.output';
import { ToolOwnerAvgAggregate } from './tool-owner-avg-aggregate.output';
import { ToolOwnerSumAggregate } from './tool-owner-sum-aggregate.output';
import { ToolOwnerMinAggregate } from './tool-owner-min-aggregate.output';
import { ToolOwnerMaxAggregate } from './tool-owner-max-aggregate.output';

@ObjectType()
export class ToolOwnerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    toolId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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
