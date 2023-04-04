import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportUpdateInput } from './picture-report-update.input';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@ArgsType()
export class UpdateOnePictureReportArgs {

    @Field(() => PictureReportUpdateInput, {nullable:false})
    data!: PictureReportUpdateInput;

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;
}
