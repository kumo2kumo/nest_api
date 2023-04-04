import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PictureReportCountAggregate } from './picture-report-count-aggregate.output';
import { PictureReportAvgAggregate } from './picture-report-avg-aggregate.output';
import { PictureReportSumAggregate } from './picture-report-sum-aggregate.output';
import { PictureReportMinAggregate } from './picture-report-min-aggregate.output';
import { PictureReportMaxAggregate } from './picture-report-max-aggregate.output';

@ObjectType()
export class PictureReportGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:false})
    uploadUserId!: number;

    @Field(() => PictureReportCountAggregate, {nullable:true})
    _count?: PictureReportCountAggregate;

    @Field(() => PictureReportAvgAggregate, {nullable:true})
    _avg?: PictureReportAvgAggregate;

    @Field(() => PictureReportSumAggregate, {nullable:true})
    _sum?: PictureReportSumAggregate;

    @Field(() => PictureReportMinAggregate, {nullable:true})
    _min?: PictureReportMinAggregate;

    @Field(() => PictureReportMaxAggregate, {nullable:true})
    _max?: PictureReportMaxAggregate;
}
