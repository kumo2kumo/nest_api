import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UniformOwnerWhereInput } from './uniform-owner-where.input';
import { UniformOwnerOrderByWithAggregationInput } from './uniform-owner-order-by-with-aggregation.input';
import { UniformOwnerScalarFieldEnum } from './uniform-owner-scalar-field.enum';
import { UniformOwnerScalarWhereWithAggregatesInput } from './uniform-owner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UniformOwnerCountAggregateInput } from './uniform-owner-count-aggregate.input';
import { UniformOwnerAvgAggregateInput } from './uniform-owner-avg-aggregate.input';
import { UniformOwnerSumAggregateInput } from './uniform-owner-sum-aggregate.input';
import { UniformOwnerMinAggregateInput } from './uniform-owner-min-aggregate.input';
import { UniformOwnerMaxAggregateInput } from './uniform-owner-max-aggregate.input';

@ArgsType()
export class UniformOwnerGroupByArgs {

    @Field(() => UniformOwnerWhereInput, {nullable:true})
    where?: UniformOwnerWhereInput;

    @Field(() => [UniformOwnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UniformOwnerOrderByWithAggregationInput>;

    @Field(() => [UniformOwnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UniformOwnerScalarFieldEnum>;

    @Field(() => UniformOwnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: UniformOwnerScalarWhereWithAggregatesInput;

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
