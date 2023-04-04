import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PictureCountAggregate } from './picture-count-aggregate.output';
import { PictureAvgAggregate } from './picture-avg-aggregate.output';
import { PictureSumAggregate } from './picture-sum-aggregate.output';
import { PictureMinAggregate } from './picture-min-aggregate.output';
import { PictureMaxAggregate } from './picture-max-aggregate.output';

@ObjectType()
export class AggregatePicture {

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
