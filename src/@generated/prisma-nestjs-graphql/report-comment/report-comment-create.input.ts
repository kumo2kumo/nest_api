import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReportCommentsInput } from '../user/user-create-nested-one-without-report-comments.input';
import { ReportCreateNestedOneWithoutReportCommentsInput } from '../report/report-create-nested-one-without-report-comments.input';

@InputType()
export class ReportCommentCreateInput {

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReportCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReportCommentsInput;

    @Field(() => ReportCreateNestedOneWithoutReportCommentsInput, {nullable:false})
    report!: ReportCreateNestedOneWithoutReportCommentsInput;
}
