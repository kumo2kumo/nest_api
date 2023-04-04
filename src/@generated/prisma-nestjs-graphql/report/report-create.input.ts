import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutReportsInput } from '../club/club-create-nested-one-without-reports.input';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';
import { ReportCommentCreateNestedManyWithoutReportInput } from '../report-comment/report-comment-create-nested-many-without-report.input';

@InputType()
export class ReportCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:true})
    opponent?: string;

    @Field(() => Int, {nullable:true})
    myScore?: number;

    @Field(() => Int, {nullable:true})
    opponentScore?: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ClubCreateNestedOneWithoutReportsInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutReportsInput;

    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:false})
    uploadUser!: UserCreateNestedOneWithoutReportsInput;

    @Field(() => ReportCommentCreateNestedManyWithoutReportInput, {nullable:true})
    reportComments?: ReportCommentCreateNestedManyWithoutReportInput;
}
