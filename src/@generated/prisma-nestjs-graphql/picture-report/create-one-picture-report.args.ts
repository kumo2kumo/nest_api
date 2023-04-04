import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportCreateInput } from './picture-report-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePictureReportArgs {

    @Field(() => PictureReportCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => PictureReportCreateInput)
    data!: PictureReportCreateInput;
}
