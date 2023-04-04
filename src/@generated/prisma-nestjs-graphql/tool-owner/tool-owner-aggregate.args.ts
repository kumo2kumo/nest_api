import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereInput } from './tool-owner-where.input';
import { ToolOwnerOrderByWithRelationInput } from './tool-owner-order-by-with-relation.input';
import { ToolOwnerWhereUniqueInput } from './tool-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToolOwnerCountAggregateInput } from './tool-owner-count-aggregate.input';
import { ToolOwnerAvgAggregateInput } from './tool-owner-avg-aggregate.input';
import { ToolOwnerSumAggregateInput } from './tool-owner-sum-aggregate.input';
import { ToolOwnerMinAggregateInput } from './tool-owner-min-aggregate.input';
import { ToolOwnerMaxAggregateInput } from './tool-owner-max-aggregate.input';

@ArgsType()
export class ToolOwnerAggregateArgs {

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    where?: ToolOwnerWhereInput;

    @Field(() => [ToolOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToolOwnerOrderByWithRelationInput>;

    @Field(() => ToolOwnerWhereUniqueInput, {nullable:true})
    cursor?: ToolOwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToolOwnerCountAggregateInput, {nullable:true})
    _count?: ToolOwnerCountAggregateInput;

    @Field(() => ToolOwnerAvgAggregateInput, {nullable:true})
    _avg?: ToolOwnerAvgAggregateInput;

    @Field(() => ToolOwnerSumAggregateInput, {nullable:true})
    _sum?: ToolOwnerSumAggregateInput;

    @Field(() => ToolOwnerMinAggregateInput, {nullable:true})
    _min?: ToolOwnerMinAggregateInput;

    @Field(() => ToolOwnerMaxAggregateInput, {nullable:true})
    _max?: ToolOwnerMaxAggregateInput;
}
