import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledCommentWhereInput } from './sled-comment-where.input';
import { SledCommentOrderByWithAggregationInput } from './sled-comment-order-by-with-aggregation.input';
import { SledCommentScalarFieldEnum } from './sled-comment-scalar-field.enum';
import { SledCommentScalarWhereWithAggregatesInput } from './sled-comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SledCommentCountAggregateInput } from './sled-comment-count-aggregate.input';
import { SledCommentAvgAggregateInput } from './sled-comment-avg-aggregate.input';
import { SledCommentSumAggregateInput } from './sled-comment-sum-aggregate.input';
import { SledCommentMinAggregateInput } from './sled-comment-min-aggregate.input';
import { SledCommentMaxAggregateInput } from './sled-comment-max-aggregate.input';

@ArgsType()
export class SledCommentGroupByArgs {

    @Field(() => SledCommentWhereInput, {nullable:true})
    where?: SledCommentWhereInput;

    @Field(() => [SledCommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SledCommentOrderByWithAggregationInput>;

    @Field(() => [SledCommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SledCommentScalarFieldEnum>;

    @Field(() => SledCommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: SledCommentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SledCommentCountAggregateInput, {nullable:true})
    _count?: SledCommentCountAggregateInput;

    @Field(() => SledCommentAvgAggregateInput, {nullable:true})
    _avg?: SledCommentAvgAggregateInput;

    @Field(() => SledCommentSumAggregateInput, {nullable:true})
    _sum?: SledCommentSumAggregateInput;

    @Field(() => SledCommentMinAggregateInput, {nullable:true})
    _min?: SledCommentMinAggregateInput;

    @Field(() => SledCommentMaxAggregateInput, {nullable:true})
    _max?: SledCommentMaxAggregateInput;
}
