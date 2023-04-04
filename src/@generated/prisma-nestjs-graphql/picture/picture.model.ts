import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PictureReport } from '../picture-report/picture-report.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Picture {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    base64!: string;

    @Field(() => Boolean, {nullable:false})
    mainFlag!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => PictureReport, {nullable:false})
    pictureReport?: PictureReport;

    @Field(() => Int, {nullable:false})
    pictureReportId!: number;
}
