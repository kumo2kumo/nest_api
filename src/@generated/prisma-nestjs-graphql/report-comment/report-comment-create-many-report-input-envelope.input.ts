import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCommentCreateManyReportInput } from './report-comment-create-many-report.input';

@InputType()
export class ReportCommentCreateManyReportInputEnvelope {

    @Field(() => [ReportCommentCreateManyReportInput], {nullable:false})
    data!: Array<ReportCommentCreateManyReportInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
