import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PictureOrderByRelationAggregateInput } from '../picture/picture-order-by-relation-aggregate.input';

@InputType()
export class PictureReportOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

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

    @Field(() => PictureOrderByRelationAggregateInput, {nullable:true})
    pictures?: PictureOrderByRelationAggregateInput;
}
