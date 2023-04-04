import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';
import { UniformOwnerOrderByWithRelationInput } from './uniform-owner-order-by-with-relation.input';
import { UniformOwnerWhereUniqueInput } from './uniform-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UniformOwnerCountAggregateInput } from './uniform-owner-count-aggregate.input';
import { UniformOwnerAvgAggregateInput } from './uniform-owner-avg-aggregate.input';
import { UniformOwnerSumAggregateInput } from './uniform-owner-sum-aggregate.input';
import { UniformOwnerMinAggregateInput } from './uniform-owner-min-aggregate.input';
import { UniformOwnerMaxAggregateInput } from './uniform-owner-max-aggregate.input';

@ArgsType()
export class UniformOwnerAggregateArgs {

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    where?: UniformOwnerWhereInput;

    @Field(() => [UniformOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UniformOwnerOrderByWithRelationInput>;

    @Field(() => UniformOwnerWhereUniqueInput, {nullable:true})
    cursor?: UniformOwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UniformOwnerCountAggregateInput, {nullable:true})
    _count?: UniformOwnerCountAggregateInput;

    @Field(() => UniformOwnerAvgAggregateInput, {nullable:true})
    _avg?: UniformOwnerAvgAggregateInput;

    @Field(() => UniformOwnerSumAggregateInput, {nullable:true})
    _sum?: UniformOwnerSumAggregateInput;

    @Field(() => UniformOwnerMinAggregateInput, {nullable:true})
    _min?: UniformOwnerMinAggregateInput;

    @Field(() => UniformOwnerMaxAggregateInput, {nullable:true})
    _max?: UniformOwnerMaxAggregateInput;
}
