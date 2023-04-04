import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UniformOwnerCountOrderByAggregateInput } from './uniform-owner-count-order-by-aggregate.input';
import { UniformOwnerAvgOrderByAggregateInput } from './uniform-owner-avg-order-by-aggregate.input';
import { UniformOwnerMaxOrderByAggregateInput } from './uniform-owner-max-order-by-aggregate.input';
import { UniformOwnerMinOrderByAggregateInput } from './uniform-owner-min-order-by-aggregate.input';
import { UniformOwnerSumOrderByAggregateInput } from './uniform-owner-sum-order-by-aggregate.input';

@InputType()
export class UniformOwnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => UniformOwnerCountOrderByAggregateInput, {nullable:true})
    _count?: UniformOwnerCountOrderByAggregateInput;

    @Field(() => UniformOwnerAvgOrderByAggregateInput, {nullable:true})
    _avg?: UniformOwnerAvgOrderByAggregateInput;

    @Field(() => UniformOwnerMaxOrderByAggregateInput, {nullable:true})
    _max?: UniformOwnerMaxOrderByAggregateInput;

    @Field(() => UniformOwnerMinOrderByAggregateInput, {nullable:true})
    _min?: UniformOwnerMinOrderByAggregateInput;

    @Field(() => UniformOwnerSumOrderByAggregateInput, {nullable:true})
    _sum?: UniformOwnerSumOrderByAggregateInput;
}
