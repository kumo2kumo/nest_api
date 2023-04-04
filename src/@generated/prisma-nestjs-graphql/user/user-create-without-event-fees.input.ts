import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ClubCreateNestedOneWithoutUsersInput } from '../club/club-create-nested-one-without-users.input';
import { MemberCreateNestedOneWithoutUserInput } from '../member/member-create-nested-one-without-user.input';
import { PictureReportCreateNestedManyWithoutUploadUserInput } from '../picture-report/picture-report-create-nested-many-without-upload-user.input';
import { ReportCreateNestedManyWithoutUploadUserInput } from '../report/report-create-nested-many-without-upload-user.input';
import { ReportCommentCreateNestedManyWithoutUserInput } from '../report-comment/report-comment-create-nested-many-without-user.input';
import { ToolOwnerCreateNestedManyWithoutUserInput } from '../tool-owner/tool-owner-create-nested-many-without-user.input';
import { UniformOwnerCreateNestedManyWithoutUserInput } from '../uniform-owner/uniform-owner-create-nested-many-without-user.input';
import { SledCommentCreateNestedManyWithoutUserInput } from '../sled-comment/sled-comment-create-nested-many-without-user.input';
import { SledCommentCreateNestedManyWithoutUpdateUserInput } from '../sled-comment/sled-comment-create-nested-many-without-update-user.input';
import { MembershipFeeCreateNestedManyWithoutUserInput } from '../membership-fee/membership-fee-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutEventFeesInput {

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

    @Field(() => ClubCreateNestedOneWithoutUsersInput, {nullable:false})
    club!: ClubCreateNestedOneWithoutUsersInput;

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

    @Field(() => MemberCreateNestedOneWithoutUserInput, {nullable:true})
    member?: MemberCreateNestedOneWithoutUserInput;

    @Field(() => PictureReportCreateNestedManyWithoutUploadUserInput, {nullable:true})
    pictureReports?: PictureReportCreateNestedManyWithoutUploadUserInput;

    @Field(() => ReportCreateNestedManyWithoutUploadUserInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutUploadUserInput;

    @Field(() => ReportCommentCreateNestedManyWithoutUserInput, {nullable:true})
    reportComments?: ReportCommentCreateNestedManyWithoutUserInput;

    @Field(() => ToolOwnerCreateNestedManyWithoutUserInput, {nullable:true})
    tools?: ToolOwnerCreateNestedManyWithoutUserInput;

    @Field(() => UniformOwnerCreateNestedManyWithoutUserInput, {nullable:true})
    uniformOwners?: UniformOwnerCreateNestedManyWithoutUserInput;

    @Field(() => SledCommentCreateNestedManyWithoutUserInput, {nullable:true})
    postSledComments?: SledCommentCreateNestedManyWithoutUserInput;

    @Field(() => SledCommentCreateNestedManyWithoutUpdateUserInput, {nullable:true})
    updateSledComments?: SledCommentCreateNestedManyWithoutUpdateUserInput;

    @Field(() => MembershipFeeCreateNestedManyWithoutUserInput, {nullable:true})
    membershipFees?: MembershipFeeCreateNestedManyWithoutUserInput;
}
