import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { MemberRelationFilter } from '../member/member-relation-filter.input';
import { PictureReportListRelationFilter } from '../picture-report/picture-report-list-relation-filter.input';
import { ReportListRelationFilter } from '../report/report-list-relation-filter.input';
import { ReportCommentListRelationFilter } from '../report-comment/report-comment-list-relation-filter.input';
import { ToolOwnerListRelationFilter } from '../tool-owner/tool-owner-list-relation-filter.input';
import { UniformOwnerListRelationFilter } from '../uniform-owner/uniform-owner-list-relation-filter.input';
import { SledCommentListRelationFilter } from '../sled-comment/sled-comment-list-relation-filter.input';
import { EventFeeListRelationFilter } from '../event-fee/event-fee-list-relation-filter.input';
import { MembershipFeeListRelationFilter } from '../membership-fee/membership-fee-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

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

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

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

    @Field(() => MemberRelationFilter, {nullable:true})
    member?: MemberRelationFilter;

    @Field(() => PictureReportListRelationFilter, {nullable:true})
    pictureReports?: PictureReportListRelationFilter;

    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: ReportListRelationFilter;

    @Field(() => ReportCommentListRelationFilter, {nullable:true})
    reportComments?: ReportCommentListRelationFilter;

    @Field(() => ToolOwnerListRelationFilter, {nullable:true})
    tools?: ToolOwnerListRelationFilter;

    @Field(() => UniformOwnerListRelationFilter, {nullable:true})
    uniformOwners?: UniformOwnerListRelationFilter;

    @Field(() => SledCommentListRelationFilter, {nullable:true})
    postSledComments?: SledCommentListRelationFilter;

    @Field(() => SledCommentListRelationFilter, {nullable:true})
    updateSledComments?: SledCommentListRelationFilter;

    @Field(() => EventFeeListRelationFilter, {nullable:true})
    eventFees?: EventFeeListRelationFilter;

    @Field(() => MembershipFeeListRelationFilter, {nullable:true})
    membershipFees?: MembershipFeeListRelationFilter;
}
