import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedManyWithoutClubInput } from '../user/user-unchecked-create-nested-many-without-club.input';
import { ScheduleUncheckedCreateNestedManyWithoutClubInput } from '../schedule/schedule-unchecked-create-nested-many-without-club.input';
import { MemberUncheckedCreateNestedManyWithoutClubInput } from '../member/member-unchecked-create-nested-many-without-club.input';
import { PictureReportUncheckedCreateNestedManyWithoutClubInput } from '../picture-report/picture-report-unchecked-create-nested-many-without-club.input';
import { ReportUncheckedCreateNestedManyWithoutClubInput } from '../report/report-unchecked-create-nested-many-without-club.input';
import { ToolUncheckedCreateNestedManyWithoutClubInput } from '../tool/tool-unchecked-create-nested-many-without-club.input';
import { UniformOwnerUncheckedCreateNestedManyWithoutClubInput } from '../uniform-owner/uniform-owner-unchecked-create-nested-many-without-club.input';
import { SledUncheckedCreateNestedManyWithoutClubInput } from '../sled/sled-unchecked-create-nested-many-without-club.input';
import { MembershipFeeUncheckedCreateNestedManyWithoutClubInput } from '../membership-fee/membership-fee-unchecked-create-nested-many-without-club.input';

@InputType()
export class ClubUncheckedCreateWithoutEventFeesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => ScheduleUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    schedules?: ScheduleUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => MemberUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    members?: MemberUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => PictureReportUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    pictureReports?: PictureReportUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => ReportUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    reports?: ReportUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => ToolUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    tools?: ToolUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => UniformOwnerUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    uniformOwners?: UniformOwnerUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => SledUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    sleds?: SledUncheckedCreateNestedManyWithoutClubInput;

    @Field(() => MembershipFeeUncheckedCreateNestedManyWithoutClubInput, {nullable:true})
    membershipFees?: MembershipFeeUncheckedCreateNestedManyWithoutClubInput;
}
