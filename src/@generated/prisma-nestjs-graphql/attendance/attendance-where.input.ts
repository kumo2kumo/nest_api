import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ScheduleRelationFilter } from '../schedule/schedule-relation-filter.input';

@InputType()
export class AttendanceWhereInput {

    @Field(() => [AttendanceWhereInput], {nullable:true})
    AND?: Array<AttendanceWhereInput>;

    @Field(() => [AttendanceWhereInput], {nullable:true})
    OR?: Array<AttendanceWhereInput>;

    @Field(() => [AttendanceWhereInput], {nullable:true})
    NOT?: Array<AttendanceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ScheduleRelationFilter, {nullable:true})
    schedule?: ScheduleRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    scheduleId?: IntFilter;
}
