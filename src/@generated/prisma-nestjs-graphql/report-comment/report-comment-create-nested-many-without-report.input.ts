import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateWithoutReportInput } from './report-comment-create-without-report.input';
import { ReportCommentCreateOrConnectWithoutReportInput } from './report-comment-create-or-connect-without-report.input';
import { ReportCommentCreateManyReportInputEnvelope } from './report-comment-create-many-report-input-envelope.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';

@InputType()
export class ReportCommentCreateNestedManyWithoutReportInput {

    @Field(() => [ReportCommentCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportCommentCreateWithoutReportInput>;

    @Field(() => [ReportCommentCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportCommentCreateOrConnectWithoutReportInput>;

    @Field(() => ReportCommentCreateManyReportInputEnvelope, {nullable:true})
    createMany?: ReportCommentCreateManyReportInputEnvelope;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    connect?: Array<ReportCommentWhereUniqueInput>;
}
