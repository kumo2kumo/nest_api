import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Schedule } from '../schedule/schedule.model';
import { Member } from '../member/member.model';
import { PictureReport } from '../picture-report/picture-report.model';
import { Report } from '../report/report.model';
import { Tool } from '../tool/tool.model';
import { UniformOwner } from '../uniform-owner/uniform-owner.model';
import { Sled } from '../sled/sled.model';
import { EventFee } from '../event-fee/event-fee.model';
import { MembershipFee } from '../membership-fee/membership-fee.model';
import { ClubCount } from './club-count.output';

@ObjectType()
export class Club {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    rankName!: string;

    @Field(() => String, {nullable:false})
    rankUnit!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Schedule], {nullable:true})
    schedules?: Array<Schedule>;

    @Field(() => [Member], {nullable:true})
    members?: Array<Member>;

    @Field(() => [PictureReport], {nullable:true})
    pictureReports?: Array<PictureReport>;

    @Field(() => [Report], {nullable:true})
    reports?: Array<Report>;

    @Field(() => [Tool], {nullable:true})
    tools?: Array<Tool>;

    @Field(() => [UniformOwner], {nullable:true})
    uniformOwners?: Array<UniformOwner>;

    @Field(() => [Sled], {nullable:true})
    sleds?: Array<Sled>;

    @Field(() => [EventFee], {nullable:true})
    eventFees?: Array<EventFee>;

    @Field(() => [MembershipFee], {nullable:true})
    membershipFees?: Array<MembershipFee>;

    @Field(() => ClubCount, {nullable:false})
    _count?: ClubCount;
}
