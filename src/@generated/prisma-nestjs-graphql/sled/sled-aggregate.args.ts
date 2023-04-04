import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SledWhereInput } from './sled-where.input';
import { SledOrderByWithRelationInput } from './sled-order-by-with-relation.input';
import { SledWhereUniqueInput } from './sled-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SledCountAggregateInput } from './sled-count-aggregate.input';
import { SledAvgAggregateInput } from './sled-avg-aggregate.input';
import { SledSumAggregateInput } from './sled-sum-aggregate.input';
import { SledMinAggregateInput } from './sled-min-aggregate.input';
import { SledMaxAggregateInput } from './sled-max-aggregate.input';

@ArgsType()
export class SledAggregateArgs {

    @Field(() => SledWhereInput, {nullable:true})
    where?: SledWhereInput;

    @Field(() => [SledOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SledOrderByWithRelationInput>;

    @Field(() => SledWhereUniqueInput, {nullable:true})
    cursor?: SledWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SledCountAggregateInput, {nullable:true})
    _count?: SledCountAggregateInput;

    @Field(() => SledAvgAggregateInput, {nullable:true})
    _avg?: SledAvgAggregateInput;

    @Field(() => SledSumAggregateInput, {nullable:true})
    _sum?: SledSumAggregateInput;

    @Field(() => SledMinAggregateInput, {nullable:true})
    _min?: SledMinAggregateInput;

    @Field(() => SledMaxAggregateInput, {nullable:true})
    _max?: SledMaxAggregateInput;
}
