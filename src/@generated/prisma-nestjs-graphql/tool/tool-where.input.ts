import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { ToolOwnerListRelationFilter } from '../tool-owner/tool-owner-list-relation-filter.input';

@InputType()
export class ToolWhereInput {

    @Field(() => [ToolWhereInput], {nullable:true})
    AND?: Array<ToolWhereInput>;

    @Field(() => [ToolWhereInput], {nullable:true})
    OR?: Array<ToolWhereInput>;

    @Field(() => [ToolWhereInput], {nullable:true})
    NOT?: Array<ToolWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => ToolOwnerListRelationFilter, {nullable:true})
    toolOwners?: ToolOwnerListRelationFilter;
}
