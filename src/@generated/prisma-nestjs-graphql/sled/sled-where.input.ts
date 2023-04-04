import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ClubRelationFilter } from '../club/club-relation-filter.input';
import { SledCommentListRelationFilter } from '../sled-comment/sled-comment-list-relation-filter.input';

@InputType()
export class SledWhereInput {

    @Field(() => [SledWhereInput], {nullable:true})
    AND?: Array<SledWhereInput>;

    @Field(() => [SledWhereInput], {nullable:true})
    OR?: Array<SledWhereInput>;

    @Field(() => [SledWhereInput], {nullable:true})
    NOT?: Array<SledWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    topic?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ClubRelationFilter, {nullable:true})
    club?: ClubRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    clubId?: IntFilter;

    @Field(() => SledCommentListRelationFilter, {nullable:true})
    sledComments?: SledCommentListRelationFilter;
}
