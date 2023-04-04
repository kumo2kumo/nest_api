import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { ToolOwnerOrderByRelationAggregateInput } from '../tool-owner/tool-owner-order-by-relation-aggregate.input';

@InputType()
export class ToolOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;

    @Field(() => ToolOwnerOrderByRelationAggregateInput, {nullable:true})
    toolOwners?: ToolOwnerOrderByRelationAggregateInput;
}
