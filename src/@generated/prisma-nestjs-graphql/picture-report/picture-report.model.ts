import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Club } from '../club/club.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Picture } from '../picture/picture.model';
import { PictureReportCount } from '../picture/picture-report-count.output';

@ObjectType()
export class PictureReport {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

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

    @Field(() => [Picture], {nullable:true})
    pictures?: Array<Picture>;

    @Field(() => PictureReportCount, {nullable:false})
    _count?: PictureReportCount;
}
