import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { MemberUncheckedCreateNestedOneWithoutUserInput } from '../member/member-unchecked-create-nested-one-without-user.input';
import { PictureReportUncheckedCreateNestedManyWithoutUploadUserInput } from '../picture-report/picture-report-unchecked-create-nested-many-without-upload-user.input';
import { ReportUncheckedCreateNestedManyWithoutUploadUserInput } from '../report/report-unchecked-create-nested-many-without-upload-user.input';
import { ReportCommentUncheckedCreateNestedManyWithoutUserInput } from '../report-comment/report-comment-unchecked-create-nested-many-without-user.input';
import { ToolOwnerUncheckedCreateNestedManyWithoutUserInput } from '../tool-owner/tool-owner-unchecked-create-nested-many-without-user.input';
import { SledCommentUncheckedCreateNestedManyWithoutUserInput } from '../sled-comment/sled-comment-unchecked-create-nested-many-without-user.input';
import { SledCommentUncheckedCreateNestedManyWithoutUpdateUserInput } from '../sled-comment/sled-comment-unchecked-create-nested-many-without-update-user.input';
import { EventFeeUncheckedCreateNestedManyWithoutUserInput } from '../event-fee/event-fee-unchecked-create-nested-many-without-user.input';
import { MembershipFeeUncheckedCreateNestedManyWithoutUserInput } from '../membership-fee/membership-fee-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutUniformOwnersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.Length(8, 100)
    password!: string;

    @Field(() => Int, {nullable:true})
    role?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    assist?: number;

    @Field(() => Int, {nullable:true})
    countTool?: number;

    @Field(() => Int, {nullable:true})
    absence?: number;

    @Field(() => Int, {nullable:true})
    lateness?: number;

    @Field(() => Int, {nullable:true})
    contactLate?: number;

    @Field(() => Int, {nullable:true})
    countPicture?: number;

    @Field(() => Int, {nullable:true})
    countReport?: number;

    @Field(() => Int, {nullable:true})
    commentLate?: number;

    @Field(() => Int, {nullable:true})
    insurance?: number;

    @Field(() => MemberUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    member?: MemberUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PictureReportUncheckedCreateNestedManyWithoutUploadUserInput, {nullable:true})
    pictureReports?: PictureReportUncheckedCreateNestedManyWithoutUploadUserInput;

    @Field(() => ReportUncheckedCreateNestedManyWithoutUploadUserInput, {nullable:true})
    reports?: ReportUncheckedCreateNestedManyWithoutUploadUserInput;

    @Field(() => ReportCommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reportComments?: ReportCommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ToolOwnerUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tools?: ToolOwnerUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SledCommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    postSledComments?: SledCommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SledCommentUncheckedCreateNestedManyWithoutUpdateUserInput, {nullable:true})
    updateSledComments?: SledCommentUncheckedCreateNestedManyWithoutUpdateUserInput;

    @Field(() => EventFeeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    eventFees?: EventFeeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MembershipFeeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    membershipFees?: MembershipFeeUncheckedCreateNestedManyWithoutUserInput;
}
