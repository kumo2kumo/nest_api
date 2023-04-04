import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class AttendanceScalarWhereWithAggregatesInput {

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => [AttendanceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AttendanceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    status?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    scheduleId?: IntWithAggregatesFilter;
}
