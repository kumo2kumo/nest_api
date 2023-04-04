import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReportCommentListRelationFilter } from '../report-comment/report-comment-list-relation-filter.input';

@InputType()
export class ReportWhereInput {

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    time?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    opponent?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    myScore?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    opponentScore?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category?: IntFilter;

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

    @Field(() => ReportCommentListRelationFilter, {nullable:true})
    reportComments?: ReportCommentListRelationFilter;
}
