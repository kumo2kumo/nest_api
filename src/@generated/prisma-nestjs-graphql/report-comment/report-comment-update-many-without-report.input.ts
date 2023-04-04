import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateWithoutReportInput } from './report-comment-create-without-report.input';
import { ReportCommentCreateOrConnectWithoutReportInput } from './report-comment-create-or-connect-without-report.input';
import { ReportCommentUpsertWithWhereUniqueWithoutReportInput } from './report-comment-upsert-with-where-unique-without-report.input';
import { ReportCommentCreateManyReportInputEnvelope } from './report-comment-create-many-report-input-envelope.input';
import { ReportCommentWhereUniqueInput } from './report-comment-where-unique.input';
import { ReportCommentUpdateWithWhereUniqueWithoutReportInput } from './report-comment-update-with-where-unique-without-report.input';
import { ReportCommentUpdateManyWithWhereWithoutReportInput } from './report-comment-update-many-with-where-without-report.input';
import { ReportCommentScalarWhereInput } from './report-comment-scalar-where.input';

@InputType()
export class ReportCommentUpdateManyWithoutReportInput {

    @Field(() => [ReportCommentCreateWithoutReportInput], {nullable:true})
    create?: Array<ReportCommentCreateWithoutReportInput>;

    @Field(() => [ReportCommentCreateOrConnectWithoutReportInput], {nullable:true})
    connectOrCreate?: Array<ReportCommentCreateOrConnectWithoutReportInput>;

    @Field(() => [ReportCommentUpsertWithWhereUniqueWithoutReportInput], {nullable:true})
    upsert?: Array<ReportCommentUpsertWithWhereUniqueWithoutReportInput>;

    @Field(() => ReportCommentCreateManyReportInputEnvelope, {nullable:true})
    createMany?: ReportCommentCreateManyReportInputEnvelope;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    set?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    delete?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentWhereUniqueInput], {nullable:true})
    connect?: Array<ReportCommentWhereUniqueInput>;

    @Field(() => [ReportCommentUpdateWithWhereUniqueWithoutReportInput], {nullable:true})
    update?: Array<ReportCommentUpdateWithWhereUniqueWithoutReportInput>;

    @Field(() => [ReportCommentUpdateManyWithWhereWithoutReportInput], {nullable:true})
    updateMany?: Array<ReportCommentUpdateManyWithWhereWithoutReportInput>;

    @Field(() => [ReportCommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReportCommentScalarWhereInput>;
}
