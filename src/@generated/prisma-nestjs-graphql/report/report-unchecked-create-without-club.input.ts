import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportCommentUncheckedCreateNestedManyWithoutReportInput } from '../report-comment/report-comment-unchecked-create-nested-many-without-report.input';

@InputType()
export class ReportUncheckedCreateWithoutClubInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    uploadUserId!: number;

    @Field(() => ReportCommentUncheckedCreateNestedManyWithoutReportInput, {nullable:true})
    reportComments?: ReportCommentUncheckedCreateNestedManyWithoutReportInput;
}
