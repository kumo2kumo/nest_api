import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MembershipFeeCountAggregate } from './membership-fee-count-aggregate.output';
import { MembershipFeeAvgAggregate } from './membership-fee-avg-aggregate.output';
import { MembershipFeeSumAggregate } from './membership-fee-sum-aggregate.output';
import { MembershipFeeMinAggregate } from './membership-fee-min-aggregate.output';
import { MembershipFeeMaxAggregate } from './membership-fee-max-aggregate.output';

@ObjectType()
export class AggregateMembershipFee {

    @Field(() => MembershipFeeCountAggregate, {nullable:true})
    _count?: MembershipFeeCountAggregate;

    @Field(() => MembershipFeeAvgAggregate, {nullable:true})
    _avg?: MembershipFeeAvgAggregate;

    @Field(() => MembershipFeeSumAggregate, {nullable:true})
    _sum?: MembershipFeeSumAggregate;

    @Field(() => MembershipFeeMinAggregate, {nullable:true})
    _min?: MembershipFeeMinAggregate;

    @Field(() => MembershipFeeMaxAggregate, {nullable:true})
    _max?: MembershipFeeMaxAggregate;
}
