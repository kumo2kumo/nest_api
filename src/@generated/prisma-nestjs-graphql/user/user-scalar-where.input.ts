import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    role?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    score?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    assist?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    countTool?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    absence?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    lateness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    contactLate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    countPicture?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    countReport?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    commentLate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    insurance?: IntFilter;
}
