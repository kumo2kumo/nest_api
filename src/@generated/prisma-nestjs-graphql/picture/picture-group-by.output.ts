import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PictureCountAggregate } from './picture-count-aggregate.output';
import { PictureAvgAggregate } from './picture-avg-aggregate.output';
import { PictureSumAggregate } from './picture-sum-aggregate.output';
import { PictureMinAggregate } from './picture-min-aggregate.output';
import { PictureMaxAggregate } from './picture-max-aggregate.output';

@ObjectType()
export class PictureGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    base64!: string;

    @Field(() => Boolean, {nullable:false})
    mainFlag!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    pictureReportId!: number;

    @Field(() => PictureCountAggregate, {nullable:true})
    _count?: PictureCountAggregate;

    @Field(() => PictureAvgAggregate, {nullable:true})
    _avg?: PictureAvgAggregate;

    @Field(() => PictureSumAggregate, {nullable:true})
    _sum?: PictureSumAggregate;

    @Field(() => PictureMinAggregate, {nullable:true})
    _min?: PictureMinAggregate;

    @Field(() => PictureMaxAggregate, {nullable:true})
    _max?: PictureMaxAggregate;
}
