import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReportRelationFilter } from '../report/report-relation-filter.input';

@InputType()
export class ReportCommentWhereInput {

    @Field(() => [ReportCommentWhereInput], {nullable:true})
    AND?: Array<ReportCommentWhereInput>;

    @Field(() => [ReportCommentWhereInput], {nullable:true})
    OR?: Array<ReportCommentWhereInput>;

    @Field(() => [ReportCommentWhereInput], {nullable:true})
    NOT?: Array<ReportCommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => ReportRelationFilter, {nullable:true})
    report?: ReportRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    reportId?: IntFilter;
}
