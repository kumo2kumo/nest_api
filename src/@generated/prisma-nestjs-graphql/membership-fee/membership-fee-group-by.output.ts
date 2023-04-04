import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipFeeCountAggregate } from './membership-fee-count-aggregate.output';
import { MembershipFeeAvgAggregate } from './membership-fee-avg-aggregate.output';
import { MembershipFeeSumAggregate } from './membership-fee-sum-aggregate.output';
import { MembershipFeeMinAggregate } from './membership-fee-min-aggregate.output';
import { MembershipFeeMaxAggregate } from './membership-fee-max-aggregate.output';

@ObjectType()
export class MembershipFeeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false})
    january!: boolean;

    @Field(() => Boolean, {nullable:false})
    february!: boolean;

    @Field(() => Boolean, {nullable:false})
    march!: boolean;

    @Field(() => Boolean, {nullable:false})
    april!: boolean;

    @Field(() => Boolean, {nullable:false})
    may!: boolean;

    @Field(() => Boolean, {nullable:false})
    june!: boolean;

    @Field(() => Boolean, {nullable:false})
    july!: boolean;

    @Field(() => Boolean, {nullable:false})
    august!: boolean;

    @Field(() => Boolean, {nullable:false})
    september!: boolean;

    @Field(() => Boolean, {nullable:false})
    october!: boolean;

    @Field(() => Boolean, {nullable:false})
    november!: boolean;

    @Field(() => Boolean, {nullable:false})
    december!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;

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
