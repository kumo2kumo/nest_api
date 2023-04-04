import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportWhereUniqueInput } from './picture-report-where-unique.input';

@ArgsType()
export class DeleteOnePictureReportArgs {

    @Field(() => PictureReportWhereUniqueInput, {nullable:false})
    where!: PictureReportWhereUniqueInput;
}
