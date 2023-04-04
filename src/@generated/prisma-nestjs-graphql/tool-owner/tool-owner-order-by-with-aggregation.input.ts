import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToolOwnerCountOrderByAggregateInput } from './tool-owner-count-order-by-aggregate.input';
import { ToolOwnerAvgOrderByAggregateInput } from './tool-owner-avg-order-by-aggregate.input';
import { ToolOwnerMaxOrderByAggregateInput } from './tool-owner-max-order-by-aggregate.input';
import { ToolOwnerMinOrderByAggregateInput } from './tool-owner-min-order-by-aggregate.input';
import { ToolOwnerSumOrderByAggregateInput } from './tool-owner-sum-order-by-aggregate.input';

@InputType()
export class ToolOwnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    toolId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ToolOwnerCountOrderByAggregateInput, {nullable:true})
    _count?: ToolOwnerCountOrderByAggregateInput;

    @Field(() => ToolOwnerAvgOrderByAggregateInput, {nullable:true})
    _avg?: ToolOwnerAvgOrderByAggregateInput;

    @Field(() => ToolOwnerMaxOrderByAggregateInput, {nullable:true})
    _max?: ToolOwnerMaxOrderByAggregateInput;

    @Field(() => ToolOwnerMinOrderByAggregateInput, {nullable:true})
    _min?: ToolOwnerMinOrderByAggregateInput;

    @Field(() => ToolOwnerSumOrderByAggregateInput, {nullable:true})
    _sum?: ToolOwnerSumOrderByAggregateInput;
}
