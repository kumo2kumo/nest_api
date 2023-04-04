import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MembershipFeeCountOrderByAggregateInput } from './membership-fee-count-order-by-aggregate.input';
import { MembershipFeeAvgOrderByAggregateInput } from './membership-fee-avg-order-by-aggregate.input';
import { MembershipFeeMaxOrderByAggregateInput } from './membership-fee-max-order-by-aggregate.input';
import { MembershipFeeMinOrderByAggregateInput } from './membership-fee-min-order-by-aggregate.input';
import { MembershipFeeSumOrderByAggregateInput } from './membership-fee-sum-order-by-aggregate.input';

@InputType()
export class MembershipFeeOrderByWithAggregationInput {

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

    @Field(() => MembershipFeeCountOrderByAggregateInput, {nullable:true})
    _count?: MembershipFeeCountOrderByAggregateInput;

    @Field(() => MembershipFeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: MembershipFeeAvgOrderByAggregateInput;

    @Field(() => MembershipFeeMaxOrderByAggregateInput, {nullable:true})
    _max?: MembershipFeeMaxOrderByAggregateInput;

    @Field(() => MembershipFeeMinOrderByAggregateInput, {nullable:true})
    _min?: MembershipFeeMinOrderByAggregateInput;

    @Field(() => MembershipFeeSumOrderByAggregateInput, {nullable:true})
    _sum?: MembershipFeeSumOrderByAggregateInput;
}
