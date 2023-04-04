import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { PictureListRelationFilter } from '../picture/picture-list-relation-filter.input';

@InputType()
export class PictureReportWhereInput {

    @Field(() => [PictureReportWhereInput], {nullable:true})
    AND?: Array<PictureReportWhereInput>;

    @Field(() => [PictureReportWhereInput], {nullable:true})
    OR?: Array<PictureReportWhereInput>;

    @Field(() => [PictureReportWhereInput], {nullable:true})
    NOT?: Array<PictureReportWhereInput>;

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

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    uploadUser?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    uploadUserId?: IntFilter;

    @Field(() => PictureListRelationFilter, {nullable:true})
    pictures?: PictureListRelationFilter;
}
