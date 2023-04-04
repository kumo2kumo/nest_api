import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedManyWithoutClubInput } from '../user/user-create-nested-many-without-club.input';
import { ScheduleCreateNestedManyWithoutClubInput } from '../schedule/schedule-create-nested-many-without-club.input';
import { PictureReportCreateNestedManyWithoutClubInput } from '../picture-report/picture-report-create-nested-many-without-club.input';
import { ReportCreateNestedManyWithoutClubInput } from '../report/report-create-nested-many-without-club.input';
import { ToolCreateNestedManyWithoutClubInput } from '../tool/tool-create-nested-many-without-club.input';
import { UniformOwnerCreateNestedManyWithoutClubInput } from '../uniform-owner/uniform-owner-create-nested-many-without-club.input';
import { SledCreateNestedManyWithoutClubInput } from '../sled/sled-create-nested-many-without-club.input';
import { EventFeeCreateNestedManyWithoutClubInput } from '../event-fee/event-fee-create-nested-many-without-club.input';
import { MembershipFeeCreateNestedManyWithoutClubInput } from '../membership-fee/membership-fee-create-nested-many-without-club.input';

@InputType()
export class ClubCreateWithoutMembersInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    rankName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(100)
    rankUnit!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutClubInput, {nullable:true})
    users?: UserCreateNestedManyWithoutClubInput;

    @Field(() => ScheduleCreateNestedManyWithoutClubInput, {nullable:true})
    schedules?: ScheduleCreateNestedManyWithoutClubInput;

    @Field(() => PictureReportCreateNestedManyWithoutClubInput, {nullable:true})
    pictureReports?: PictureReportCreateNestedManyWithoutClubInput;

    @Field(() => ReportCreateNestedManyWithoutClubInput, {nullable:true})
    reports?: ReportCreateNestedManyWithoutClubInput;

    @Field(() => ToolCreateNestedManyWithoutClubInput, {nullable:true})
    tools?: ToolCreateNestedManyWithoutClubInput;

    @Field(() => UniformOwnerCreateNestedManyWithoutClubInput, {nullable:true})
    uniformOwners?: UniformOwnerCreateNestedManyWithoutClubInput;

    @Field(() => SledCreateNestedManyWithoutClubInput, {nullable:true})
    sleds?: SledCreateNestedManyWithoutClubInput;

    @Field(() => EventFeeCreateNestedManyWithoutClubInput, {nullable:true})
    eventFees?: EventFeeCreateNestedManyWithoutClubInput;

    @Field(() => MembershipFeeCreateNestedManyWithoutClubInput, {nullable:true})
    membershipFees?: MembershipFeeCreateNestedManyWithoutClubInput;
}
