import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClubCountOrderByAggregateInput } from './club-count-order-by-aggregate.input';
import { ClubAvgOrderByAggregateInput } from './club-avg-order-by-aggregate.input';
import { ClubMaxOrderByAggregateInput } from './club-max-order-by-aggregate.input';
import { ClubMinOrderByAggregateInput } from './club-min-order-by-aggregate.input';
import { ClubSumOrderByAggregateInput } from './club-sum-order-by-aggregate.input';

@InputType()
export class ClubOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rankName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rankUnit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ClubCountOrderByAggregateInput, {nullable:true})
    _count?: ClubCountOrderByAggregateInput;

    @Field(() => ClubAvgOrderByAggregateInput, {nullable:true})
    _avg?: ClubAvgOrderByAggregateInput;

    @Field(() => ClubMaxOrderByAggregateInput, {nullable:true})
    _max?: ClubMaxOrderByAggregateInput;

    @Field(() => ClubMinOrderByAggregateInput, {nullable:true})
    _min?: ClubMinOrderByAggregateInput;

    @Field(() => ClubSumOrderByAggregateInput, {nullable:true})
    _sum?: ClubSumOrderByAggregateInput;
}
