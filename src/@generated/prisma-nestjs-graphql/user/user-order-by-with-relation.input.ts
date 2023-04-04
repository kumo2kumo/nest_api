import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { MemberOrderByWithRelationInput } from '../member/member-order-by-with-relation.input';
import { PictureReportOrderByRelationAggregateInput } from '../picture-report/picture-report-order-by-relation-aggregate.input';
import { ReportOrderByRelationAggregateInput } from '../report/report-order-by-relation-aggregate.input';
import { ReportCommentOrderByRelationAggregateInput } from '../report-comment/report-comment-order-by-relation-aggregate.input';
import { ToolOwnerOrderByRelationAggregateInput } from '../tool-owner/tool-owner-order-by-relation-aggregate.input';
import { UniformOwnerOrderByRelationAggregateInput } from '../uniform-owner/uniform-owner-order-by-relation-aggregate.input';
import { SledCommentOrderByRelationAggregateInput } from '../sled-comment/sled-comment-order-by-relation-aggregate.input';
import { EventFeeOrderByRelationAggregateInput } from '../event-fee/event-fee-order-by-relation-aggregate.input';
import { MembershipFeeOrderByRelationAggregateInput } from '../membership-fee/membership-fee-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assist?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countTool?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    absence?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lateness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactLate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countPicture?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countReport?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commentLate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    insurance?: keyof typeof SortOrder;

    @Field(() => MemberOrderByWithRelationInput, {nullable:true})
    member?: MemberOrderByWithRelationInput;

    @Field(() => PictureReportOrderByRelationAggregateInput, {nullable:true})
    pictureReports?: PictureReportOrderByRelationAggregateInput;

    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ReportOrderByRelationAggregateInput;

    @Field(() => ReportCommentOrderByRelationAggregateInput, {nullable:true})
    reportComments?: ReportCommentOrderByRelationAggregateInput;

    @Field(() => ToolOwnerOrderByRelationAggregateInput, {nullable:true})
    tools?: ToolOwnerOrderByRelationAggregateInput;

    @Field(() => UniformOwnerOrderByRelationAggregateInput, {nullable:true})
    uniformOwners?: UniformOwnerOrderByRelationAggregateInput;

    @Field(() => SledCommentOrderByRelationAggregateInput, {nullable:true})
    postSledComments?: SledCommentOrderByRelationAggregateInput;

    @Field(() => SledCommentOrderByRelationAggregateInput, {nullable:true})
    updateSledComments?: SledCommentOrderByRelationAggregateInput;

    @Field(() => EventFeeOrderByRelationAggregateInput, {nullable:true})
    eventFees?: EventFeeOrderByRelationAggregateInput;

    @Field(() => MembershipFeeOrderByRelationAggregateInput, {nullable:true})
    membershipFees?: MembershipFeeOrderByRelationAggregateInput;
}
