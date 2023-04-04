import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateManyWithoutClubInput } from '../user/user-update-many-without-club.input';
import { ScheduleUpdateManyWithoutClubInput } from '../schedule/schedule-update-many-without-club.input';
import { PictureReportUpdateManyWithoutClubInput } from '../picture-report/picture-report-update-many-without-club.input';
import { ReportUpdateManyWithoutClubInput } from '../report/report-update-many-without-club.input';
import { ToolUpdateManyWithoutClubInput } from '../tool/tool-update-many-without-club.input';
import { UniformOwnerUpdateManyWithoutClubInput } from '../uniform-owner/uniform-owner-update-many-without-club.input';
import { SledUpdateManyWithoutClubInput } from '../sled/sled-update-many-without-club.input';
import { EventFeeUpdateManyWithoutClubInput } from '../event-fee/event-fee-update-many-without-club.input';
import { MembershipFeeUpdateManyWithoutClubInput } from '../membership-fee/membership-fee-update-many-without-club.input';

@InputType()
export class ClubUpdateWithoutMembersInput {

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

    @Field(() => UserUpdateManyWithoutClubInput, {nullable:true})
    users?: UserUpdateManyWithoutClubInput;

    @Field(() => ScheduleUpdateManyWithoutClubInput, {nullable:true})
    schedules?: ScheduleUpdateManyWithoutClubInput;

    @Field(() => PictureReportUpdateManyWithoutClubInput, {nullable:true})
    pictureReports?: PictureReportUpdateManyWithoutClubInput;

    @Field(() => ReportUpdateManyWithoutClubInput, {nullable:true})
    reports?: ReportUpdateManyWithoutClubInput;

    @Field(() => ToolUpdateManyWithoutClubInput, {nullable:true})
    tools?: ToolUpdateManyWithoutClubInput;

    @Field(() => UniformOwnerUpdateManyWithoutClubInput, {nullable:true})
    uniformOwners?: UniformOwnerUpdateManyWithoutClubInput;

    @Field(() => SledUpdateManyWithoutClubInput, {nullable:true})
    sleds?: SledUpdateManyWithoutClubInput;

    @Field(() => EventFeeUpdateManyWithoutClubInput, {nullable:true})
    eventFees?: EventFeeUpdateManyWithoutClubInput;

    @Field(() => MembershipFeeUpdateManyWithoutClubInput, {nullable:true})
    membershipFees?: MembershipFeeUpdateManyWithoutClubInput;
}
