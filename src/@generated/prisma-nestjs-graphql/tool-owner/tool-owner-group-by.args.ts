import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToolOwnerWhereInput } from './tool-owner-where.input';
import { ToolOwnerOrderByWithAggregationInput } from './tool-owner-order-by-with-aggregation.input';
import { ToolOwnerScalarFieldEnum } from './tool-owner-scalar-field.enum';
import { ToolOwnerScalarWhereWithAggregatesInput } from './tool-owner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToolOwnerCountAggregateInput } from './tool-owner-count-aggregate.input';
import { ToolOwnerAvgAggregateInput } from './tool-owner-avg-aggregate.input';
import { ToolOwnerSumAggregateInput } from './tool-owner-sum-aggregate.input';
import { ToolOwnerMinAggregateInput } from './tool-owner-min-aggregate.input';
import { ToolOwnerMaxAggregateInput } from './tool-owner-max-aggregate.input';

@ArgsType()
export class ToolOwnerGroupByArgs {

    @Field(() => ToolOwnerWhereInput, {nullable:true})
    where?: ToolOwnerWhereInput;

    @Field(() => [ToolOwnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToolOwnerOrderByWithAggregationInput>;

    @Field(() => [ToolOwnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToolOwnerScalarFieldEnum>;

    @Field(() => ToolOwnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToolOwnerScalarWhereWithAggregatesInput;

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
