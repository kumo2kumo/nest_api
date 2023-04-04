import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReportCommentCountOrderByAggregateInput } from './report-comment-count-order-by-aggregate.input';
import { ReportCommentAvgOrderByAggregateInput } from './report-comment-avg-order-by-aggregate.input';
import { ReportCommentMaxOrderByAggregateInput } from './report-comment-max-order-by-aggregate.input';
import { ReportCommentMinOrderByAggregateInput } from './report-comment-min-order-by-aggregate.input';
import { ReportCommentSumOrderByAggregateInput } from './report-comment-sum-order-by-aggregate.input';

@InputType()
export class ReportCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => ReportCommentCountOrderByAggregateInput, {nullable:true})
    _count?: ReportCommentCountOrderByAggregateInput;

    @Field(() => ReportCommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReportCommentAvgOrderByAggregateInput;

    @Field(() => ReportCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: ReportCommentMaxOrderByAggregateInput;

    @Field(() => ReportCommentMinOrderByAggregateInput, {nullable:true})
    _min?: ReportCommentMinOrderByAggregateInput;

    @Field(() => ReportCommentSumOrderByAggregateInput, {nullable:true})
    _sum?: ReportCommentSumOrderByAggregateInput;
}
