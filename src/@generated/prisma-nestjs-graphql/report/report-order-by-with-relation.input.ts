import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReportCommentOrderByRelationAggregateInput } from '../report-comment/report-comment-order-by-relation-aggregate.input';

@InputType()
export class ReportOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    opponent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    myScore?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    opponentScore?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    uploadUser?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    uploadUserId?: keyof typeof SortOrder;

    @Field(() => ReportCommentOrderByRelationAggregateInput, {nullable:true})
    reportComments?: ReportCommentOrderByRelationAggregateInput;
}
