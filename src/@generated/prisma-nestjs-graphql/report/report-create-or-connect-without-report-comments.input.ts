import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportCreateWithoutReportCommentsInput } from './report-create-without-report-comments.input';

@InputType()
export class ReportCreateOrConnectWithoutReportCommentsInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    where!: ReportWhereUniqueInput;

    @Field(() => ReportCreateWithoutReportCommentsInput, {nullable:false})
    create!: ReportCreateWithoutReportCommentsInput;
}
