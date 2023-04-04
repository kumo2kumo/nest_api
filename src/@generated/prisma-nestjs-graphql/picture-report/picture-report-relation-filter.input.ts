import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PictureReportWhereInput } from './picture-report-where.input';

@InputType()
export class PictureReportRelationFilter {

    @Field(() => PictureReportWhereInput, {nullable:true})
    is?: PictureReportWhereInput;

    @Field(() => PictureReportWhereInput, {nullable:true})
    isNot?: PictureReportWhereInput;
}
