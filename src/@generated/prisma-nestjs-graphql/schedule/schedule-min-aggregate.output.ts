import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScheduleMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    activityDay?: Date | string;

    @Field(() => String, {nullable:true})
    time?: string;

    @Field(() => Int, {nullable:true})
    category?: number;

    @Field(() => String, {nullable:true})
    place?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    meetingTime?: string;

    @Field(() => String, {nullable:true})
    opponent?: string;

    @Field(() => String, {nullable:true})
    matchTime?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    clubId?: number;
}
