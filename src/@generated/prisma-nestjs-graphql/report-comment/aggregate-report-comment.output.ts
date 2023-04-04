import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReportCommentCountAggregate } from './report-comment-count-aggregate.output';
import { ReportCommentAvgAggregate } from './report-comment-avg-aggregate.output';
import { ReportCommentSumAggregate } from './report-comment-sum-aggregate.output';
import { ReportCommentMinAggregate } from './report-comment-min-aggregate.output';
import { ReportCommentMaxAggregate } from './report-comment-max-aggregate.output';

@ObjectType()
export class AggregateReportComment {

    @Field(() => ReportCommentCountAggregate, {nullable:true})
    _count?: ReportCommentCountAggregate;

    @Field(() => ReportCommentAvgAggregate, {nullable:true})
    _avg?: ReportCommentAvgAggregate;

    @Field(() => ReportCommentSumAggregate, {nullable:true})
    _sum?: ReportCommentSumAggregate;

    @Field(() => ReportCommentMinAggregate, {nullable:true})
    _min?: ReportCommentMinAggregate;

    @Field(() => ReportCommentMaxAggregate, {nullable:true})
    _max?: ReportCommentMaxAggregate;
}
