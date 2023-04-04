import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SledCommentCountOrderByAggregateInput } from './sled-comment-count-order-by-aggregate.input';
import { SledCommentAvgOrderByAggregateInput } from './sled-comment-avg-order-by-aggregate.input';
import { SledCommentMaxOrderByAggregateInput } from './sled-comment-max-order-by-aggregate.input';
import { SledCommentMinOrderByAggregateInput } from './sled-comment-min-order-by-aggregate.input';
import { SledCommentSumOrderByAggregateInput } from './sled-comment-sum-order-by-aggregate.input';

@InputType()
export class SledCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sledId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateUserId?: keyof typeof SortOrder;

    @Field(() => SledCommentCountOrderByAggregateInput, {nullable:true})
    _count?: SledCommentCountOrderByAggregateInput;

    @Field(() => SledCommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: SledCommentAvgOrderByAggregateInput;

    @Field(() => SledCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: SledCommentMaxOrderByAggregateInput;

    @Field(() => SledCommentMinOrderByAggregateInput, {nullable:true})
    _min?: SledCommentMinOrderByAggregateInput;

    @Field(() => SledCommentSumOrderByAggregateInput, {nullable:true})
    _sum?: SledCommentSumOrderByAggregateInput;
}
