import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ToolOwnerScalarWhereWithAggregatesInput {

    @Field(() => [ToolOwnerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ToolOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [ToolOwnerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ToolOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [ToolOwnerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ToolOwnerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    toolId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
