import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';
import { PictureReportCreateInput } from './picture-report-create.input';
import { PictureReportUpdateInput } from './picture-report-update.input';

@ArgsType()
export class UpsertOnePictureReportArgs {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;

    @Field(() => PictureReportCreateInput, {nullable:false})
    create!: PictureReportCreateInput;

    @Field(() => PictureReportUpdateInput, {nullable:false})
    update!: PictureReportUpdateInput;
}
