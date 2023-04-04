import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { MemberUncheckedUpdateOneWithoutUserInput } from '../member/member-unchecked-update-one-without-user.input';
import { PictureReportUncheckedUpdateManyWithoutUploadUserInput } from '../picture-report/picture-report-unchecked-update-many-without-upload-user.input';
import { ReportUncheckedUpdateManyWithoutUploadUserInput } from '../report/report-unchecked-update-many-without-upload-user.input';
import { ReportCommentUncheckedUpdateManyWithoutUserInput } from '../report-comment/report-comment-unchecked-update-many-without-user.input';
import { ToolOwnerUncheckedUpdateManyWithoutUserInput } from '../tool-owner/tool-owner-unchecked-update-many-without-user.input';
import { SledCommentUncheckedUpdateManyWithoutUserInput } from '../sled-comment/sled-comment-unchecked-update-many-without-user.input';
import { SledCommentUncheckedUpdateManyWithoutUpdateUserInput } from '../sled-comment/sled-comment-unchecked-update-many-without-update-user.input';
import { EventFeeUncheckedUpdateManyWithoutUserInput } from '../event-fee/event-fee-unchecked-update-many-without-user.input';
import { MembershipFeeUncheckedUpdateManyWithoutUserInput } from '../membership-fee/membership-fee-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutUniformOwnersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    clubId?: IntFieldUpdateOperationsInput;

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

    @Field(() => MemberUncheckedUpdateOneWithoutUserInput, {nullable:true})
    member?: MemberUncheckedUpdateOneWithoutUserInput;

    @Field(() => PictureReportUncheckedUpdateManyWithoutUploadUserInput, {nullable:true})
    pictureReports?: PictureReportUncheckedUpdateManyWithoutUploadUserInput;

    @Field(() => ReportUncheckedUpdateManyWithoutUploadUserInput, {nullable:true})
    reports?: ReportUncheckedUpdateManyWithoutUploadUserInput;

    @Field(() => ReportCommentUncheckedUpdateManyWithoutUserInput, {nullable:true})
    reportComments?: ReportCommentUncheckedUpdateManyWithoutUserInput;

    @Field(() => ToolOwnerUncheckedUpdateManyWithoutUserInput, {nullable:true})
    tools?: ToolOwnerUncheckedUpdateManyWithoutUserInput;

    @Field(() => SledCommentUncheckedUpdateManyWithoutUserInput, {nullable:true})
    postSledComments?: SledCommentUncheckedUpdateManyWithoutUserInput;

    @Field(() => SledCommentUncheckedUpdateManyWithoutUpdateUserInput, {nullable:true})
    updateSledComments?: SledCommentUncheckedUpdateManyWithoutUpdateUserInput;

    @Field(() => EventFeeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    eventFees?: EventFeeUncheckedUpdateManyWithoutUserInput;

    @Field(() => MembershipFeeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    membershipFees?: MembershipFeeUncheckedUpdateManyWithoutUserInput;
}
