import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PictureReportCountOrderByAggregateInput } from './picture-report-count-order-by-aggregate.input';
import { PictureReportAvgOrderByAggregateInput } from './picture-report-avg-order-by-aggregate.input';
import { PictureReportMaxOrderByAggregateInput } from './picture-report-max-order-by-aggregate.input';
import { PictureReportMinOrderByAggregateInput } from './picture-report-min-order-by-aggregate.input';
import { PictureReportSumOrderByAggregateInput } from './picture-report-sum-order-by-aggregate.input';

@InputType()
export class PictureReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uploadUserId?: keyof typeof SortOrder;

    @Field(() => PictureReportCountOrderByAggregateInput, {nullable:true})
    _count?: PictureReportCountOrderByAggregateInput;

    @Field(() => PictureReportAvgOrderByAggregateInput, {nullable:true})
    _avg?: PictureReportAvgOrderByAggregateInput;

    @Field(() => PictureReportMaxOrderByAggregateInput, {nullable:true})
    _max?: PictureReportMaxOrderByAggregateInput;

    @Field(() => PictureReportMinOrderByAggregateInput, {nullable:true})
    _min?: PictureReportMinOrderByAggregateInput;

    @Field(() => PictureReportSumOrderByAggregateInput, {nullable:true})
    _sum?: PictureReportSumOrderByAggregateInput;
}
