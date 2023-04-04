import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereInput } from './membership-fee-where.input';
import { MembershipFeeOrderByWithAggregationInput } from './membership-fee-order-by-with-aggregation.input';
import { MembershipFeeScalarFieldEnum } from './membership-fee-scalar-field.enum';
import { MembershipFeeScalarWhereWithAggregatesInput } from './membership-fee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MembershipFeeCountAggregateInput } from './membership-fee-count-aggregate.input';
import { MembershipFeeAvgAggregateInput } from './membership-fee-avg-aggregate.input';
import { MembershipFeeSumAggregateInput } from './membership-fee-sum-aggregate.input';
import { MembershipFeeMinAggregateInput } from './membership-fee-min-aggregate.input';
import { MembershipFeeMaxAggregateInput } from './membership-fee-max-aggregate.input';

@ArgsType()
export class MembershipFeeGroupByArgs {

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    where?: MembershipFeeWhereInput;

    @Field(() => [MembershipFeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MembershipFeeOrderByWithAggregationInput>;

    @Field(() => [MembershipFeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MembershipFeeScalarFieldEnum>;

    @Field(() => MembershipFeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: MembershipFeeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MembershipFeeCountAggregateInput, {nullable:true})
    _count?: MembershipFeeCountAggregateInput;

    @Field(() => MembershipFeeAvgAggregateInput, {nullable:true})
    _avg?: MembershipFeeAvgAggregateInput;

    @Field(() => MembershipFeeSumAggregateInput, {nullable:true})
    _sum?: MembershipFeeSumAggregateInput;

    @Field(() => MembershipFeeMinAggregateInput, {nullable:true})
    _min?: MembershipFeeMinAggregateInput;

    @Field(() => MembershipFeeMaxAggregateInput, {nullable:true})
    _max?: MembershipFeeMaxAggregateInput;
}
