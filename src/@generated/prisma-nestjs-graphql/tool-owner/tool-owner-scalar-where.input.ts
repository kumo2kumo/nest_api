import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ToolOwnerScalarWhereInput {

    @Field(() => [ToolOwnerScalarWhereInput], {nullable:true})
    AND?: Array<ToolOwnerScalarWhereInput>;

    @Field(() => [ToolOwnerScalarWhereInput], {nullable:true})
    OR?: Array<ToolOwnerScalarWhereInput>;

    @Field(() => [ToolOwnerScalarWhereInput], {nullable:true})
    NOT?: Array<ToolOwnerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    toolId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
