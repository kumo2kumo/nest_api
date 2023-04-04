import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ReportCommentScalarWhereInput {

    @Field(() => [ReportCommentScalarWhereInput], {nullable:true})
    AND?: Array<ReportCommentScalarWhereInput>;

    @Field(() => [ReportCommentScalarWhereInput], {nullable:true})
    OR?: Array<ReportCommentScalarWhereInput>;

    @Field(() => [ReportCommentScalarWhereInput], {nullable:true})
    NOT?: Array<ReportCommentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    reportId?: IntFilter;
}
