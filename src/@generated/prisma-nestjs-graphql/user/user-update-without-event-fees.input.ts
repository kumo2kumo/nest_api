import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ClubUpdateOneRequiredWithoutUsersInput } from '../club/club-update-one-required-without-users.input';
import { MemberUpdateOneWithoutUserInput } from '../member/member-update-one-without-user.input';
import { PictureReportUpdateManyWithoutUploadUserInput } from '../picture-report/picture-report-update-many-without-upload-user.input';
import { ReportUpdateManyWithoutUploadUserInput } from '../report/report-update-many-without-upload-user.input';
import { ReportCommentUpdateManyWithoutUserInput } from '../report-comment/report-comment-update-many-without-user.input';
import { ToolOwnerUpdateManyWithoutUserInput } from '../tool-owner/tool-owner-update-many-without-user.input';
import { UniformOwnerUpdateManyWithoutUserInput } from '../uniform-owner/uniform-owner-update-many-without-user.input';
import { SledCommentUpdateManyWithoutUserInput } from '../sled-comment/sled-comment-update-many-without-user.input';
import { SledCommentUpdateManyWithoutUpdateUserInput } from '../sled-comment/sled-comment-update-many-without-update-user.input';
import { MembershipFeeUpdateManyWithoutUserInput } from '../membership-fee/membership-fee-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutEventFeesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    role?: IntFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ClubUpdateOneRequiredWithoutUsersInput, {nullable:true})
    club?: ClubUpdateOneRequiredWithoutUsersInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    score?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    assist?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countTool?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    absence?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    lateness?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    contactLate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countPicture?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countReport?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    commentLate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    insurance?: IntFieldUpdateOperationsInput;

    @Field(() => MemberUpdateOneWithoutUserInput, {nullable:true})
    member?: MemberUpdateOneWithoutUserInput;

    @Field(() => PictureReportUpdateManyWithoutUploadUserInput, {nullable:true})
    pictureReports?: PictureReportUpdateManyWithoutUploadUserInput;

    @Field(() => ReportUpdateManyWithoutUploadUserInput, {nullable:true})
    reports?: ReportUpdateManyWithoutUploadUserInput;

    @Field(() => ReportCommentUpdateManyWithoutUserInput, {nullable:true})
    reportComments?: ReportCommentUpdateManyWithoutUserInput;

    @Field(() => ToolOwnerUpdateManyWithoutUserInput, {nullable:true})
    tools?: ToolOwnerUpdateManyWithoutUserInput;

    @Field(() => UniformOwnerUpdateManyWithoutUserInput, {nullable:true})
    uniformOwners?: UniformOwnerUpdateManyWithoutUserInput;

    @Field(() => SledCommentUpdateManyWithoutUserInput, {nullable:true})
    postSledComments?: SledCommentUpdateManyWithoutUserInput;

    @Field(() => SledCommentUpdateManyWithoutUpdateUserInput, {nullable:true})
    updateSledComments?: SledCommentUpdateManyWithoutUpdateUserInput;

    @Field(() => MembershipFeeUpdateManyWithoutUserInput, {nullable:true})
    membershipFees?: MembershipFeeUpdateManyWithoutUserInput;
}
