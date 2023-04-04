import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { User } from '../user/user.model';
import { ReportComment } from '../report-comment/report-comment.model';
import { ReportCount } from './report-count.output';

@ObjectType()
export class Report {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:true})
    opponent!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    myScore!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    opponentScore!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => Int, {nullable:false})
    clubId!: number;

    @Field(() => User, {nullable:false})
    uploadUser?: User;

    @Field(() => Int, {nullable:false})
    uploadUserId!: number;

    @Field(() => [ReportComment], {nullable:true})
    reportComments?: Array<ReportComment>;

    @Field(() => ReportCount, {nullable:false})
    _count?: ReportCount;
}
