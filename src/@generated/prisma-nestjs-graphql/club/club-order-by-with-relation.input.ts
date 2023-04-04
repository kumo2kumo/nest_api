import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { ScheduleOrderByRelationAggregateInput } from '../schedule/schedule-order-by-relation-aggregate.input';
import { MemberOrderByRelationAggregateInput } from '../member/member-order-by-relation-aggregate.input';
import { PictureReportOrderByRelationAggregateInput } from '../picture-report/picture-report-order-by-relation-aggregate.input';
import { ReportOrderByRelationAggregateInput } from '../report/report-order-by-relation-aggregate.input';
import { ToolOrderByRelationAggregateInput } from '../tool/tool-order-by-relation-aggregate.input';
import { UniformOwnerOrderByRelationAggregateInput } from '../uniform-owner/uniform-owner-order-by-relation-aggregate.input';
import { SledOrderByRelationAggregateInput } from '../sled/sled-order-by-relation-aggregate.input';
import { EventFeeOrderByRelationAggregateInput } from '../event-fee/event-fee-order-by-relation-aggregate.input';
import { MembershipFeeOrderByRelationAggregateInput } from '../membership-fee/membership-fee-order-by-relation-aggregate.input';

@InputType()
export class ClubOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rankName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rankUnit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => ScheduleOrderByRelationAggregateInput, {nullable:true})
    schedules?: ScheduleOrderByRelationAggregateInput;

    @Field(() => MemberOrderByRelationAggregateInput, {nullable:true})
    members?: MemberOrderByRelationAggregateInput;

    @Field(() => PictureReportOrderByRelationAggregateInput, {nullable:true})
    pictureReports?: PictureReportOrderByRelationAggregateInput;

    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ReportOrderByRelationAggregateInput;

    @Field(() => ToolOrderByRelationAggregateInput, {nullable:true})
    tools?: ToolOrderByRelationAggregateInput;

    @Field(() => UniformOwnerOrderByRelationAggregateInput, {nullable:true})
    uniformOwners?: UniformOwnerOrderByRelationAggregateInput;

    @Field(() => SledOrderByRelationAggregateInput, {nullable:true})
    sleds?: SledOrderByRelationAggregateInput;

    @Field(() => EventFeeOrderByRelationAggregateInput, {nullable:true})
    eventFees?: EventFeeOrderByRelationAggregateInput;

    @Field(() => MembershipFeeOrderByRelationAggregateInput, {nullable:true})
    membershipFees?: MembershipFeeOrderByRelationAggregateInput;
}
