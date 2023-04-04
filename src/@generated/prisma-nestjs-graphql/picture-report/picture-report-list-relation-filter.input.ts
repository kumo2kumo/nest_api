import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereInput } from './picture-report-where.input';

@InputType()
export class PictureReportListRelationFilter {

    @Field(() => PictureReportWhereInput, {nullable:true})
    every?: PictureReportWhereInput;

    @Field(() => PictureReportWhereInput, {nullable:true})
    some?: PictureReportWhereInput;

    @Field(() => PictureReportWhereInput, {nullable:true})
    none?: PictureReportWhereInput;
}
