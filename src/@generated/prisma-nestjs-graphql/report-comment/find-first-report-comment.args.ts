import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCommentWhereInput } from './report-comment-where.input';
import { ReportCommentOrderByWithRelationInput } from './report-comment-order-by-with-relation.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportCommentScalarFieldEnum } from './report-comment-scalar-field.enum';

@ArgsType()
export class FindFirstReportCommentArgs {

    @Field(() => ReportCommentWhereInput, {nullable:true})
    where?: ReportCommentWhereInput;

    @Field(() => [ReportCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReportCommentOrderByWithRelationInput>;

    @Field(() => ReportCommentWhereUniqueInput, {nullable:true})
    cursor?: ReportCommentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReportCommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportCommentScalarFieldEnum>;
}
