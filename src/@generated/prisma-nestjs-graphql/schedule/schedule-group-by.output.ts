import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScheduleCountAggregate } from './schedule-count-aggregate.output';
import { ScheduleAvgAggregate } from './schedule-avg-aggregate.output';
import { ScheduleSumAggregate } from './schedule-sum-aggregate.output';
import { ScheduleMinAggregate } from './schedule-min-aggregate.output';
import { ScheduleMaxAggregate } from './schedule-max-aggregate.output';

@ObjectType()
export class ScheduleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    activityDay!: Date | string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => String, {nullable:false})
    place!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:false})
    meetingTime!: string;

    @Field(() => String, {nullable:true})
    opponent?: string;

    @Field(() => String, {nullable:true})
    matchTime?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => ScheduleCountAggregate, {nullable:true})
    _count?: ScheduleCountAggregate;

    @Field(() => ScheduleAvgAggregate, {nullable:true})
    _avg?: ScheduleAvgAggregate;

    @Field(() => ScheduleSumAggregate, {nullable:true})
    _sum?: ScheduleSumAggregate;

    @Field(() => ScheduleMinAggregate, {nullable:true})
    _min?: ScheduleMinAggregate;

    @Field(() => ScheduleMaxAggregate, {nullable:true})
    _max?: ScheduleMaxAggregate;
}
