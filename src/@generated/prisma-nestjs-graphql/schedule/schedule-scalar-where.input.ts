import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ScheduleScalarWhereInput {

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    AND?: Array<ScheduleScalarWhereInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    OR?: Array<ScheduleScalarWhereInput>;

    @Field(() => [ScheduleScalarWhereInput], {nullable:true})
    NOT?: Array<ScheduleScalarWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;
}
