import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportUpdateWithoutReportCommentsInput } from './report-update-without-report-comments.input';
import { ReportCreateWithoutReportCommentsInput } from './report-create-without-report-comments.input';

@InputType()
export class ReportUpsertWithoutReportCommentsInput {

    @Field(() => ReportUpdateWithoutReportCommentsInput, {nullable:false})
    update!: ReportUpdateWithoutReportCommentsInput;

    @Field(() => ReportCreateWithoutReportCommentsInput, {nullable:false})
    create!: ReportCreateWithoutReportCommentsInput;
}
