import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AttendanceScalarWhereInput {

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    AND?: Array<AttendanceScalarWhereInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    OR?: Array<AttendanceScalarWhereInput>;

    @Field(() => [AttendanceScalarWhereInput], {nullable:true})
    NOT?: Array<AttendanceScalarWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    scheduleId?: IntFilter;
}
