import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutReportCommentsInput } from './report-create-without-report-comments.input';
import { ReportCreateOrConnectWithoutReportCommentsInput } from './report-create-or-connect-without-report-comments.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedOneWithoutReportCommentsInput {

    @Field(() => ReportCreateWithoutReportCommentsInput, {nullable:true})
    create?: ReportCreateWithoutReportCommentsInput;

    @Field(() => ReportCreateOrConnectWithoutReportCommentsInput, {nullable:true})
    connectOrCreate?: ReportCreateOrConnectWithoutReportCommentsInput;

    @Field(() => ReportWhereUniqueInput, {nullable:true})
    connect?: ReportWhereUniqueInput;
}
