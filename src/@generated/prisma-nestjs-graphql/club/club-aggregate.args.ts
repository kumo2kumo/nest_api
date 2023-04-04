import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { ClubOrderByWithRelationInput } from './club-order-by-with-relation.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubCountAggregateInput } from './club-count-aggregate.input';
import { ClubAvgAggregateInput } from './club-avg-aggregate.input';
import { ClubSumAggregateInput } from './club-sum-aggregate.input';
import { ClubMinAggregateInput } from './club-min-aggregate.input';
import { ClubMaxAggregateInput } from './club-max-aggregate.input';

@ArgsType()
export class ClubAggregateArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithRelationInput>;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    cursor?: ClubWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClubCountAggregateInput, {nullable:true})
    _count?: ClubCountAggregateInput;

    @Field(() => ClubAvgAggregateInput, {nullable:true})
    _avg?: ClubAvgAggregateInput;

    @Field(() => ClubSumAggregateInput, {nullable:true})
    _sum?: ClubSumAggregateInput;

    @Field(() => ClubMinAggregateInput, {nullable:true})
    _min?: ClubMinAggregateInput;

    @Field(() => ClubMaxAggregateInput, {nullable:true})
    _max?: ClubMaxAggregateInput;
}
