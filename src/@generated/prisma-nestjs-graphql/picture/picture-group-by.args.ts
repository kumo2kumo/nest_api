import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereInput } from './picture-where.input';
import { PictureOrderByWithAggregationInput } from './picture-order-by-with-aggregation.input';
import { PictureScalarFieldEnum } from './picture-scalar-field.enum';
import { PictureScalarWhereWithAggregatesInput } from './picture-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PictureCountAggregateInput } from './picture-count-aggregate.input';
import { PictureAvgAggregateInput } from './picture-avg-aggregate.input';
import { PictureSumAggregateInput } from './picture-sum-aggregate.input';
import { PictureMinAggregateInput } from './picture-min-aggregate.input';
import { PictureMaxAggregateInput } from './picture-max-aggregate.input';

@ArgsType()
export class PictureGroupByArgs {

    @Field(() => PictureWhereInput, {nullable:true})
    where?: PictureWhereInput;

    @Field(() => [PictureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PictureOrderByWithAggregationInput>;

    @Field(() => [PictureScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PictureScalarFieldEnum>;

    @Field(() => PictureScalarWhereWithAggregatesInput, {nullable:true})
    having?: PictureScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PictureCountAggregateInput, {nullable:true})
    _count?: PictureCountAggregateInput;

    @Field(() => PictureAvgAggregateInput, {nullable:true})
    _avg?: PictureAvgAggregateInput;

    @Field(() => PictureSumAggregateInput, {nullable:true})
    _sum?: PictureSumAggregateInput;

    @Field(() => PictureMinAggregateInput, {nullable:true})
    _min?: PictureMinAggregateInput;

    @Field(() => PictureMaxAggregateInput, {nullable:true})
    _max?: PictureMaxAggregateInput;
}
