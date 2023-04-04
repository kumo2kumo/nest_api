import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class PictureReportScalarWhereInput {

    @Field(() => [PictureReportScalarWhereInput], {nullable:true})
    AND?: Array<PictureReportScalarWhereInput>;

    @Field(() => [PictureReportScalarWhereInput], {nullable:true})
    OR?: Array<PictureReportScalarWhereInput>;

    @Field(() => [PictureReportScalarWhereInput], {nullable:true})
    NOT?: Array<PictureReportScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    uploadUserId?: IntFilter;
}
