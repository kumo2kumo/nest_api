import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';

@InputType()
export class UniformOwnerWhereInput {

    @Field(() => [UniformOwnerWhereInput], {nullable:true})
    AND?: Array<UniformOwnerWhereInput>;

    @Field(() => [UniformOwnerWhereInput], {nullable:true})
    OR?: Array<UniformOwnerWhereInput>;

    @Field(() => [UniformOwnerWhereInput], {nullable:true})
    NOT?: Array<UniformOwnerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    number?: IntFilter;

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
