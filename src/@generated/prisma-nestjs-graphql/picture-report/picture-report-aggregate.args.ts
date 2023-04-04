import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportWhereInput } from './picture-report-where.input';
import { PictureReportOrderByWithRelationInput } from './picture-report-order-by-with-relation.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PictureReportCountAggregateInput } from './picture-report-count-aggregate.input';
import { PictureReportAvgAggregateInput } from './picture-report-avg-aggregate.input';
import { PictureReportSumAggregateInput } from './picture-report-sum-aggregate.input';
import { PictureReportMinAggregateInput } from './picture-report-min-aggregate.input';
import { PictureReportMaxAggregateInput } from './picture-report-max-aggregate.input';

@ArgsType()
export class PictureReportAggregateArgs {

    @Field(() => PictureReportWhereInput, {nullable:true})
    where?: PictureReportWhereInput;

    @Field(() => [PictureReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PictureReportOrderByWithRelationInput>;

    @Field(() => PictureReportWhereUniqueInput, {nullable:true})
    cursor?: PictureReportWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PictureReportCountAggregateInput, {nullable:true})
    _count?: PictureReportCountAggregateInput;

    @Field(() => PictureReportAvgAggregateInput, {nullable:true})
    _avg?: PictureReportAvgAggregateInput;

    @Field(() => PictureReportSumAggregateInput, {nullable:true})
    _sum?: PictureReportSumAggregateInput;

    @Field(() => PictureReportMinAggregateInput, {nullable:true})
    _min?: PictureReportMinAggregateInput;

    @Field(() => PictureReportMaxAggregateInput, {nullable:true})
    _max?: PictureReportMaxAggregateInput;
}
