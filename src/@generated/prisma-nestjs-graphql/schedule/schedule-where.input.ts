import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { AttendanceListRelationFilter } from '../attendance/attendance-list-relation-filter.input';

@InputType()
export class ScheduleWhereInput {

    @Field(() => [ScheduleWhereInput], {nullable:true})
    AND?: Array<ScheduleWhereInput>;

    @Field(() => [ScheduleWhereInput], {nullable:true})
    OR?: Array<ScheduleWhereInput>;

    @Field(() => [ScheduleWhereInput], {nullable:true})
    NOT?: Array<ScheduleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    activityDay?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    time?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    place?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    meetingTime?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    opponent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    matchTime?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => AttendanceListRelationFilter, {nullable:true})
    attendances?: AttendanceListRelationFilter;
}
