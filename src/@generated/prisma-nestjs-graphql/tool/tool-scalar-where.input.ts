import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ToolScalarWhereInput {

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    AND?: Array<ToolScalarWhereInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    OR?: Array<ToolScalarWhereInput>;

    @Field(() => [ToolScalarWhereInput], {nullable:true})
    NOT?: Array<ToolScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;
}
