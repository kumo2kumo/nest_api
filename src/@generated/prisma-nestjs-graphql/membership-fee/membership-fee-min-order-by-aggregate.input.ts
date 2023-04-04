import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MembershipFeeMinOrderByAggregateInput {

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
}
