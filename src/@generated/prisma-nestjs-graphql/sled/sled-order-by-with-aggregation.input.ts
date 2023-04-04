import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SledCountOrderByAggregateInput } from './sled-count-order-by-aggregate.input';
import { SledAvgOrderByAggregateInput } from './sled-avg-order-by-aggregate.input';
import { SledMaxOrderByAggregateInput } from './sled-max-order-by-aggregate.input';
import { SledMinOrderByAggregateInput } from './sled-min-order-by-aggregate.input';
import { SledSumOrderByAggregateInput } from './sled-sum-order-by-aggregate.input';

@InputType()
export class SledOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    topic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => SledCountOrderByAggregateInput, {nullable:true})
    _count?: SledCountOrderByAggregateInput;

    @Field(() => SledAvgOrderByAggregateInput, {nullable:true})
    _avg?: SledAvgOrderByAggregateInput;

    @Field(() => SledMaxOrderByAggregateInput, {nullable:true})
    _max?: SledMaxOrderByAggregateInput;

    @Field(() => SledMinOrderByAggregateInput, {nullable:true})
    _min?: SledMinOrderByAggregateInput;

    @Field(() => SledSumOrderByAggregateInput, {nullable:true})
    _sum?: SledSumOrderByAggregateInput;
}
