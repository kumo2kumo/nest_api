import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ToolRelationFilter } from '../tool/tool-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ToolOwnerWhereInput {

    @Field(() => [ToolOwnerWhereInput], {nullable:true})
    AND?: Array<ToolOwnerWhereInput>;

    @Field(() => [ToolOwnerWhereInput], {nullable:true})
    OR?: Array<ToolOwnerWhereInput>;

    @Field(() => [ToolOwnerWhereInput], {nullable:true})
    NOT?: Array<ToolOwnerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ToolRelationFilter, {nullable:true})
    tool?: ToolRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    toolId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
