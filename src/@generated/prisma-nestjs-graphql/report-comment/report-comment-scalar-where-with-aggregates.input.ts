import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ReportCommentScalarWhereWithAggregatesInput {

    @Field(() => [ReportCommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportCommentScalarWhereWithAggregatesInput>;

    @Field(() => [ReportCommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportCommentScalarWhereWithAggregatesInput>;

    @Field(() => [ReportCommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportCommentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reportId?: IntWithAggregatesFilter;
}
