import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportCommentCountAggregate } from './report-comment-count-aggregate.output';
import { ReportCommentAvgAggregate } from './report-comment-avg-aggregate.output';
import { ReportCommentSumAggregate } from './report-comment-sum-aggregate.output';
import { ReportCommentMinAggregate } from './report-comment-min-aggregate.output';
import { ReportCommentMaxAggregate } from './report-comment-max-aggregate.output';

@ObjectType()
export class ReportCommentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    reportId!: number;

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
