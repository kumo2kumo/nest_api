import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { Member } from '../member/member.model';
import { PictureReport } from '../picture-report/picture-report.model';
import { Report } from '../report/report.model';
import { ReportComment } from '../report-comment/report-comment.model';
import { ToolOwner } from '../tool-owner/tool-owner.model';
import { UniformOwner } from '../uniform-owner/uniform-owner.model';
import { SledComment } from '../sled-comment/sled-comment.model';
import { EventFee } from '../event-fee/event-fee.model';
import { MembershipFee } from '../membership-fee/membership-fee.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    /** @Validator.@IsEmail() */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    @Field(() => Int, {nullable:false,defaultValue:1})
    role!: number;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    score!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    assist!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    countTool!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    absence!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    lateness!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    contactLate!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    countPicture!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    countReport!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    commentLate!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    insurance!: number;

    @Field(() => Member, {nullable:true})
    member?: Member | null;

    @Field(() => [PictureReport], {nullable:true})
    pictureReports?: Array<PictureReport>;

    @Field(() => [Report], {nullable:true})
    reports?: Array<Report>;

    @Field(() => [ReportComment], {nullable:true})
    reportComments?: Array<ReportComment>;

    @Field(() => [ToolOwner], {nullable:true})
    tools?: Array<ToolOwner>;

    @Field(() => [UniformOwner], {nullable:true})
    uniformOwners?: Array<UniformOwner>;

    @Field(() => [SledComment], {nullable:true})
    postSledComments?: Array<SledComment>;

    @Field(() => [SledComment], {nullable:true})
    updateSledComments?: Array<SledComment>;

    @Field(() => [EventFee], {nullable:true})
    eventFees?: Array<EventFee>;

    @Field(() => [MembershipFee], {nullable:true})
    membershipFees?: Array<MembershipFee>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
