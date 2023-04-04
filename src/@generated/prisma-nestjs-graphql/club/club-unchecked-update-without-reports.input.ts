import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutClubInput } from '../user/user-unchecked-update-many-without-club.input';
import { ScheduleUncheckedUpdateManyWithoutClubInput } from '../schedule/schedule-unchecked-update-many-without-club.input';
import { MemberUncheckedUpdateManyWithoutClubInput } from '../member/member-unchecked-update-many-without-club.input';
import { PictureReportUncheckedUpdateManyWithoutClubInput } from '../picture-report/picture-report-unchecked-update-many-without-club.input';
import { ToolUncheckedUpdateManyWithoutClubInput } from '../tool/tool-unchecked-update-many-without-club.input';
import { UniformOwnerUncheckedUpdateManyWithoutClubInput } from '../uniform-owner/uniform-owner-unchecked-update-many-without-club.input';
import { SledUncheckedUpdateManyWithoutClubInput } from '../sled/sled-unchecked-update-many-without-club.input';
import { EventFeeUncheckedUpdateManyWithoutClubInput } from '../event-fee/event-fee-unchecked-update-many-without-club.input';
import { MembershipFeeUncheckedUpdateManyWithoutClubInput } from '../membership-fee/membership-fee-unchecked-update-many-without-club.input';

@InputType()
export class ClubUncheckedUpdateWithoutReportsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    rankName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    rankUnit?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutClubInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutClubInput;

    @Field(() => ScheduleUncheckedUpdateManyWithoutClubInput, {nullable:true})
    schedules?: ScheduleUncheckedUpdateManyWithoutClubInput;

    @Field(() => MemberUncheckedUpdateManyWithoutClubInput, {nullable:true})
    members?: MemberUncheckedUpdateManyWithoutClubInput;

    @Field(() => PictureReportUncheckedUpdateManyWithoutClubInput, {nullable:true})
    pictureReports?: PictureReportUncheckedUpdateManyWithoutClubInput;

    @Field(() => ToolUncheckedUpdateManyWithoutClubInput, {nullable:true})
    tools?: ToolUncheckedUpdateManyWithoutClubInput;

    @Field(() => UniformOwnerUncheckedUpdateManyWithoutClubInput, {nullable:true})
    uniformOwners?: UniformOwnerUncheckedUpdateManyWithoutClubInput;

    @Field(() => SledUncheckedUpdateManyWithoutClubInput, {nullable:true})
    sleds?: SledUncheckedUpdateManyWithoutClubInput;

    @Field(() => EventFeeUncheckedUpdateManyWithoutClubInput, {nullable:true})
    eventFees?: EventFeeUncheckedUpdateManyWithoutClubInput;

    @Field(() => MembershipFeeUncheckedUpdateManyWithoutClubInput, {nullable:true})
    membershipFees?: MembershipFeeUncheckedUpdateManyWithoutClubInput;
}
