import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';

@InputType()
export class MemberOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    englishName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    strongerSide?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hobby?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skill?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startBelong?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSport?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dream?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ClubOrderByWithRelationInput, {nullable:true})
    club?: ClubOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    clubId?: keyof typeof SortOrder;
}
