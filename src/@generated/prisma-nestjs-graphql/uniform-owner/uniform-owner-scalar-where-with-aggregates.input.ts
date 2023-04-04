import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UniformOwnerScalarWhereWithAggregatesInput {

    @Field(() => [UniformOwnerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UniformOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [UniformOwnerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UniformOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [UniformOwnerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UniformOwnerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    number?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clubId?: IntWithAggregatesFilter;
}
