import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventFeeCountOrderByAggregateInput } from './event-fee-count-order-by-aggregate.input';
import { EventFeeAvgOrderByAggregateInput } from './event-fee-avg-order-by-aggregate.input';
import { EventFeeMaxOrderByAggregateInput } from './event-fee-max-order-by-aggregate.input';
import { EventFeeMinOrderByAggregateInput } from './event-fee-min-order-by-aggregate.input';
import { EventFeeSumOrderByAggregateInput } from './event-fee-sum-order-by-aggregate.input';

@InputType()
export class EventFeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    january?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    february?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    march?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    april?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    may?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    june?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    july?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    august?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    september?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    october?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    november?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    december?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => EventFeeCountOrderByAggregateInput, {nullable:true})
    _count?: EventFeeCountOrderByAggregateInput;

    @Field(() => EventFeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventFeeAvgOrderByAggregateInput;

    @Field(() => EventFeeMaxOrderByAggregateInput, {nullable:true})
    _max?: EventFeeMaxOrderByAggregateInput;

    @Field(() => EventFeeMinOrderByAggregateInput, {nullable:true})
    _min?: EventFeeMinOrderByAggregateInput;

    @Field(() => EventFeeSumOrderByAggregateInput, {nullable:true})
    _sum?: EventFeeSumOrderByAggregateInput;
}
