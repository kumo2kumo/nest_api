import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PictureCountOrderByAggregateInput } from './picture-count-order-by-aggregate.input';
import { PictureAvgOrderByAggregateInput } from './picture-avg-order-by-aggregate.input';
import { PictureMaxOrderByAggregateInput } from './picture-max-order-by-aggregate.input';
import { PictureMinOrderByAggregateInput } from './picture-min-order-by-aggregate.input';
import { PictureSumOrderByAggregateInput } from './picture-sum-order-by-aggregate.input';

@InputType()
export class PictureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base64?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mainFlag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pictureReportId?: keyof typeof SortOrder;

    @Field(() => PictureCountOrderByAggregateInput, {nullable:true})
    _count?: PictureCountOrderByAggregateInput;

    @Field(() => PictureAvgOrderByAggregateInput, {nullable:true})
    _avg?: PictureAvgOrderByAggregateInput;

    @Field(() => PictureMaxOrderByAggregateInput, {nullable:true})
    _max?: PictureMaxOrderByAggregateInput;

    @Field(() => PictureMinOrderByAggregateInput, {nullable:true})
    _min?: PictureMinOrderByAggregateInput;

    @Field(() => PictureSumOrderByAggregateInput, {nullable:true})
    _sum?: PictureSumOrderByAggregateInput;
}
