import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateNestedOneWithoutReportCommentsInput } from '../report/report-create-nested-one-without-report-comments.input';

@InputType()
export class ReportCommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReportCreateNestedOneWithoutReportCommentsInput, {nullable:false})
    report!: ReportCreateNestedOneWithoutReportCommentsInput;
}
