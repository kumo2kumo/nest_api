import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SledCommentCountAggregate } from './sled-comment-count-aggregate.output';
import { SledCommentAvgAggregate } from './sled-comment-avg-aggregate.output';
import { SledCommentSumAggregate } from './sled-comment-sum-aggregate.output';
import { SledCommentMinAggregate } from './sled-comment-min-aggregate.output';
import { SledCommentMaxAggregate } from './sled-comment-max-aggregate.output';

@ObjectType()
export class SledCommentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    sledId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    updateUserId?: number;

    @Field(() => SledCommentCountAggregate, {nullable:true})
    _count?: SledCommentCountAggregate;

    @Field(() => SledCommentAvgAggregate, {nullable:true})
    _avg?: SledCommentAvgAggregate;

    @Field(() => SledCommentSumAggregate, {nullable:true})
    _sum?: SledCommentSumAggregate;

    @Field(() => SledCommentMinAggregate, {nullable:true})
    _min?: SledCommentMinAggregate;

    @Field(() => SledCommentMaxAggregate, {nullable:true})
    _max?: SledCommentMaxAggregate;
}
