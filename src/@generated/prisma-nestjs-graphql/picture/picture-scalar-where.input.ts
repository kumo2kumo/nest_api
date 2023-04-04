import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class PictureScalarWhereInput {

    @Field(() => [PictureScalarWhereInput], {nullable:true})
    AND?: Array<PictureScalarWhereInput>;

    @Field(() => [PictureScalarWhereInput], {nullable:true})
    OR?: Array<PictureScalarWhereInput>;

    @Field(() => [PictureScalarWhereInput], {nullable:true})
    NOT?: Array<PictureScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    base64?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    mainFlag?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pictureReportId?: IntFilter;
}
