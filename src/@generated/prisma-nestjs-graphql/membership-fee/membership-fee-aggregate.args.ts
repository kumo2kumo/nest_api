import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MembershipFeeWhereInput } from './membership-fee-where.input';
import { MembershipFeeOrderByWithRelationInput } from './membership-fee-order-by-with-relation.input';
import { MembershipFeeWhereUniqueInput } from './membership-fee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MembershipFeeCountAggregateInput } from './membership-fee-count-aggregate.input';
import { MembershipFeeAvgAggregateInput } from './membership-fee-avg-aggregate.input';
import { MembershipFeeSumAggregateInput } from './membership-fee-sum-aggregate.input';
import { MembershipFeeMinAggregateInput } from './membership-fee-min-aggregate.input';
import { MembershipFeeMaxAggregateInput } from './membership-fee-max-aggregate.input';

@ArgsType()
export class MembershipFeeAggregateArgs {

    @Field(() => MembershipFeeWhereInput, {nullable:true})
    where?: MembershipFeeWhereInput;

    @Field(() => [MembershipFeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MembershipFeeOrderByWithRelationInput>;

    @Field(() => MembershipFeeWhereUniqueInput, {nullable:true})
    cursor?: MembershipFeeWhereUniqueInput;

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
