import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PictureReportWhereInput } from './picture-report-where.input';

@ArgsType()
export class DeleteManyPictureReportArgs {

    @Field(() => PictureReportWhereInput, {nullable:true})
    where?: PictureReportWhereInput;
}
