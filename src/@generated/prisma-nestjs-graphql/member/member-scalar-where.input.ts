import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class MemberScalarWhereInput {

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    AND?: Array<MemberScalarWhereInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    OR?: Array<MemberScalarWhereInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    NOT?: Array<MemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    englishName?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    number?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    position?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    birthday?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    height?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    weight?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    strongerSide?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    from?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    occupation?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    hobby?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    skill?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    startBelong?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    startSport?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    chance?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    dream?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    goal?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;
}
