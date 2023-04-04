import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';

@InputType()
export class MembershipFeeWhereInput {

    @Field(() => [MembershipFeeWhereInput], {nullable:true})
    AND?: Array<MembershipFeeWhereInput>;

    @Field(() => [MembershipFeeWhereInput], {nullable:true})
    OR?: Array<MembershipFeeWhereInput>;

    @Field(() => [MembershipFeeWhereInput], {nullable:true})
    NOT?: Array<MembershipFeeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    january?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    february?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    march?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    april?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    may?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    june?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    july?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    august?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    september?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    october?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    november?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    december?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;
}
