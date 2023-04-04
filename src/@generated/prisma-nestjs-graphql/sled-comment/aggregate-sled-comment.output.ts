import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SledCommentCountAggregate } from './sled-comment-count-aggregate.output';
import { SledCommentAvgAggregate } from './sled-comment-avg-aggregate.output';
import { SledCommentSumAggregate } from './sled-comment-sum-aggregate.output';
import { SledCommentMinAggregate } from './sled-comment-min-aggregate.output';
import { SledCommentMaxAggregate } from './sled-comment-max-aggregate.output';

@ObjectType()
export class AggregateSledComment {

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
