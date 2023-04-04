import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SledRelationFilter } from '../sled/sled-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class SledCommentWhereInput {

    @Field(() => [SledCommentWhereInput], {nullable:true})
    AND?: Array<SledCommentWhereInput>;

    @Field(() => [SledCommentWhereInput], {nullable:true})
    OR?: Array<SledCommentWhereInput>;

    @Field(() => [SledCommentWhereInput], {nullable:true})
    NOT?: Array<SledCommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => SledRelationFilter, {nullable:true})
    sled?: SledRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    sledId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    updateUser?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    updateUserId?: IntNullableFilter;
}
