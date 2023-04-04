import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { AttendanceOrderByRelationAggregateInput } from '../attendance/attendance-order-by-relation-aggregate.input';

@InputType()
export class ScheduleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activityDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    place?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meetingTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    opponent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    matchTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => AttendanceOrderByRelationAggregateInput, {nullable:true})
    attendances?: AttendanceOrderByRelationAggregateInput;
}
