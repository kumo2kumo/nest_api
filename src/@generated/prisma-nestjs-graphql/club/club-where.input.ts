import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ScheduleListRelationFilter } from '../schedule/schedule-list-relation-filter.input';
import { MemberListRelationFilter } from '../member/member-list-relation-filter.input';
import { PictureReportListRelationFilter } from '../picture-report/picture-report-list-relation-filter.input';
import { ReportListRelationFilter } from '../report/report-list-relation-filter.input';
import { ToolListRelationFilter } from '../tool/tool-list-relation-filter.input';
import { UniformOwnerListRelationFilter } from '../uniform-owner/uniform-owner-list-relation-filter.input';
import { SledListRelationFilter } from '../sled/sled-list-relation-filter.input';
import { EventFeeListRelationFilter } from '../event-fee/event-fee-list-relation-filter.input';
import { MembershipFeeListRelationFilter } from '../membership-fee/membership-fee-list-relation-filter.input';

@InputType()
export class ClubWhereInput {

    @Field(() => [ClubWhereInput], {nullable:true})
    AND?: Array<ClubWhereInput>;

    @Field(() => [ClubWhereInput], {nullable:true})
    OR?: Array<ClubWhereInput>;

    @Field(() => [ClubWhereInput], {nullable:true})
    NOT?: Array<ClubWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rankName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rankUnit?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => ScheduleListRelationFilter, {nullable:true})
    schedules?: ScheduleListRelationFilter;

    @Field(() => MemberListRelationFilter, {nullable:true})
    members?: MemberListRelationFilter;

    @Field(() => PictureReportListRelationFilter, {nullable:true})
    pictureReports?: PictureReportListRelationFilter;

    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: ReportListRelationFilter;

    @Field(() => ToolListRelationFilter, {nullable:true})
    tools?: ToolListRelationFilter;

    @Field(() => UniformOwnerListRelationFilter, {nullable:true})
    uniformOwners?: UniformOwnerListRelationFilter;

    @Field(() => SledListRelationFilter, {nullable:true})
    sleds?: SledListRelationFilter;

    @Field(() => EventFeeListRelationFilter, {nullable:true})
    eventFees?: EventFeeListRelationFilter;

    @Field(() => MembershipFeeListRelationFilter, {nullable:true})
    membershipFees?: MembershipFeeListRelationFilter;
}
