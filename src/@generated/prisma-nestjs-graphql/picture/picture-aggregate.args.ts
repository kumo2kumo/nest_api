import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureWhereInput } from './picture-where.input';
import { PictureOrderByWithRelationInput } from './picture-order-by-with-relation.input';
import { PictureWhereUniqueInput } from './picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PictureCountAggregateInput } from './picture-count-aggregate.input';
import { PictureAvgAggregateInput } from './picture-avg-aggregate.input';
import { PictureSumAggregateInput } from './picture-sum-aggregate.input';
import { PictureMinAggregateInput } from './picture-min-aggregate.input';
import { PictureMaxAggregateInput } from './picture-max-aggregate.input';

@ArgsType()
export class PictureAggregateArgs {

    @Field(() => PictureWhereInput, {nullable:true})
    where?: PictureWhereInput;

    @Field(() => [PictureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PictureOrderByWithRelationInput>;

    @Field(() => PictureWhereUniqueInput, {nullable:true})
    cursor?: PictureWhereUniqueInput;

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
