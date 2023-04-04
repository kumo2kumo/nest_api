import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReportCommentsInput } from '../user/user-create-nested-one-without-report-comments.input';

@InputType()
export class ReportCommentCreateWithoutReportInput {

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReportCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReportCommentsInput;
}
