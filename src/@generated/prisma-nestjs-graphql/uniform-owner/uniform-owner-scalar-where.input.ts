import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UniformOwnerScalarWhereInput {

    @Field(() => [UniformOwnerScalarWhereInput], {nullable:true})
    AND?: Array<UniformOwnerScalarWhereInput>;

    @Field(() => [UniformOwnerScalarWhereInput], {nullable:true})
    OR?: Array<UniformOwnerScalarWhereInput>;

    @Field(() => [UniformOwnerScalarWhereInput], {nullable:true})
    NOT?: Array<UniformOwnerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    number?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;
}
