import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutReportCommentsInput } from './report-create-without-report-comments.input';
import { ReportCreateOrConnectWithoutReportCommentsInput } from './report-create-or-connect-without-report-comments.input';
import { ReportUpsertWithoutReportCommentsInput } from './report-upsert-without-report-comments.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithoutReportCommentsInput } from './report-update-without-report-comments.input';

@InputType()
export class ReportUpdateOneRequiredWithoutReportCommentsInput {

    @Field(() => ReportCreateWithoutReportCommentsInput, {nullable:true})
    create?: ReportCreateWithoutReportCommentsInput;

    @Field(() => ReportCreateOrConnectWithoutReportCommentsInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutReportCommentsInput;

    @Field(() => ReportUpsertWithoutReportCommentsInput, {nullable:true})
    upsert?: ReportUpsertWithoutReportCommentsInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;

    @Field(() => ReportUpdateWithoutReportCommentsInput, {nullable:true})
    update?: ReportUpdateWithoutReportCommentsInput;
}
