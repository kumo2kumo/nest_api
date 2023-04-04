import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PictureReportCountAggregate } from './picture-report-count-aggregate.output';
import { PictureReportAvgAggregate } from './picture-report-avg-aggregate.output';
import { PictureReportSumAggregate } from './picture-report-sum-aggregate.output';
import { PictureReportMinAggregate } from './picture-report-min-aggregate.output';
import { PictureReportMaxAggregate } from './picture-report-max-aggregate.output';

@ObjectType()
export class AggregatePictureReport {

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
