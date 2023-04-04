import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberCountOrderByAggregateInput } from './member-count-order-by-aggregate.input';
import { MemberAvgOrderByAggregateInput } from './member-avg-order-by-aggregate.input';
import { MemberMaxOrderByAggregateInput } from './member-max-order-by-aggregate.input';
import { MemberMinOrderByAggregateInput } from './member-min-order-by-aggregate.input';
import { MemberSumOrderByAggregateInput } from './member-sum-order-by-aggregate.input';

@InputType()
export class MemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    englishName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    strongerSide?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hobby?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skill?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startBelong?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSport?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dream?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => MemberCountOrderByAggregateInput, {nullable:true})
    _count?: MemberCountOrderByAggregateInput;

    @Field(() => MemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: MemberAvgOrderByAggregateInput;

    @Field(() => MemberMaxOrderByAggregateInput, {nullable:true})
    _max?: MemberMaxOrderByAggregateInput;

    @Field(() => MemberMinOrderByAggregateInput, {nullable:true})
    _min?: MemberMinOrderByAggregateInput;

    @Field(() => MemberSumOrderByAggregateInput, {nullable:true})
    _sum?: MemberSumOrderByAggregateInput;
}
