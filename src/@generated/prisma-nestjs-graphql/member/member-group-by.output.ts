import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberCountAggregate } from './member-count-aggregate.output';
import { MemberAvgAggregate } from './member-avg-aggregate.output';
import { MemberSumAggregate } from './member-sum-aggregate.output';
import { MemberMinAggregate } from './member-min-aggregate.output';
import { MemberMaxAggregate } from './member-max-aggregate.output';

@ObjectType()
export class MemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    englishName?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => String, {nullable:true})
    position?: string;

    @Field(() => String, {nullable:true})
    birthday?: string;

    @Field(() => String, {nullable:true})
    height?: string;

    @Field(() => String, {nullable:true})
    weight?: string;

    @Field(() => String, {nullable:true})
    strongerSide?: string;

    @Field(() => String, {nullable:true})
    from?: string;

    @Field(() => String, {nullable:true})
    occupation?: string;

    @Field(() => String, {nullable:true})
    hobby?: string;

    @Field(() => String, {nullable:true})
    skill?: string;

    @Field(() => String, {nullable:true})
    startBelong?: string;

    @Field(() => String, {nullable:true})
    startSport?: string;

    @Field(() => String, {nullable:true})
    chance?: string;

    @Field(() => String, {nullable:true})
    dream?: string;

    @Field(() => String, {nullable:true})
    goal?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => MemberCountAggregate, {nullable:true})
    _count?: MemberCountAggregate;

    @Field(() => MemberAvgAggregate, {nullable:true})
    _avg?: MemberAvgAggregate;

    @Field(() => MemberSumAggregate, {nullable:true})
    _sum?: MemberSumAggregate;

    @Field(() => MemberMinAggregate, {nullable:true})
    _min?: MemberMinAggregate;

    @Field(() => MemberMaxAggregate, {nullable:true})
    _max?: MemberMaxAggregate;
}
