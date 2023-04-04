import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentWhereInput } from './report-comment-where.input';
import { ReportCommentOrderByWithRelationInput } from './report-comment-order-by-with-relation.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportCommentCountAggregateInput } from './report-comment-count-aggregate.input';
import { ReportCommentAvgAggregateInput } from './report-comment-avg-aggregate.input';
import { ReportCommentSumAggregateInput } from './report-comment-sum-aggregate.input';
import { ReportCommentMinAggregateInput } from './report-comment-min-aggregate.input';
import { ReportCommentMaxAggregateInput } from './report-comment-max-aggregate.input';

@ArgsType()
export class ReportCommentAggregateArgs {

    @Field(() => ReportCommentWhereInput, {nullable:true})
    where?: ReportCommentWhereInput;

    @Field(() => [ReportCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportCommentOrderByWithRelationInput>;

    @Field(() => ReportCommentWhereUniqueInput, {nullable:true})
    cursor?: ReportCommentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReportCommentCountAggregateInput, {nullable:true})
    _count?: ReportCommentCountAggregateInput;

    @Field(() => ReportCommentAvgAggregateInput, {nullable:true})
    _avg?: ReportCommentAvgAggregateInput;

    @Field(() => ReportCommentSumAggregateInput, {nullable:true})
    _sum?: ReportCommentSumAggregateInput;

    @Field(() => ReportCommentMinAggregateInput, {nullable:true})
    _min?: ReportCommentMinAggregateInput;

    @Field(() => ReportCommentMaxAggregateInput, {nullable:true})
    _max?: ReportCommentMaxAggregateInput;
}
