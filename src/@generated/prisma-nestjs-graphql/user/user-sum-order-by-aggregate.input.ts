import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assist?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countTool?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    absence?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lateness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactLate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countPicture?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countReport?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commentLate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    insurance?: keyof typeof SortOrder;
}
