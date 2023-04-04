import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { Attendance } from '../attendance/attendance.model';
import { ScheduleCount } from './schedule-count.output';

@ObjectType()
export class Schedule {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    activityDay!: Date;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => String, {nullable:false})
    place!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:false})
    meetingTime!: string;

    @Field(() => String, {nullable:true})
    opponent!: string | null;

    @Field(() => String, {nullable:true})
    matchTime!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => [Attendance], {nullable:true})
    attendances?: Array<Attendance>;

    @Field(() => ScheduleCount, {nullable:false})
    _count?: ScheduleCount;
}
